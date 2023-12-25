// Database handler
import { reach } from "./helpers/utils/index.js";
import dotenv from "dotenv";
import getFloor from "../common/utils/floor/index.js";
// import { writeFile, open } from "fs/promises";
import { getAllFormattedHoldersInfo } from "../test.js";
import { AssetInfoSchema, ZOD_PROJECT, multiMintAssetInfoSchema, } from "./zod.js";
import { _firestore_pool, firestore_pool } from "./helpers/db.js";
import { z } from "zod";
import { hasOpted_V2 } from "./contracts.js";
import { schedule } from "node-cron";
// TODO : Insert actual contract ASSET_INFO_REF
dotenv.config();
export const HOUR_LIMIT = 12;
// const backupDatabase = async (data: string) => {
//   const filePath = `/backups/db_${+new Date()}.json`;
//   try {
//     await open(filePath, "O_CREAT");
//     writeFile(filePath, data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// we are trying to keep count of the number of times we have run this function
// so we can stop it after a certain number of times
// GEt data
//  Compare if data is the same
//  if it's the same add a point over 24 hours
// If it changes reset the points
// The mmemonic handles the reward distribution for the user
// Users will have to create their own contracts and have the mmemonic interact with the contract
// Users will need to fund the contract and not the address
const getAmount = async (props, floor) => {
    let amount = 0;
    // ! Todo Remove check for token alone and incorporate all checks
    let FLOOR_PRICE = 0;
    if (props?.rewardType == "floor") {
        if (props?.overrideFloor) {
            FLOOR_PRICE = props?.floor;
        }
        else {
            FLOOR_PRICE = floor || (await getFloor(props?.project)) || 0;
        }
        amount = ((FLOOR_PRICE || props?.floor) * (props?.percent / 100)) / 365;
    }
    else {
        FLOOR_PRICE = props?.dailyReward;
        amount = FLOOR_PRICE;
    }
    return amount;
};
const Check = async () => {
    const firesore_proj = await _firestore_pool
        .where("active", "==", true)
        .where("poolBalance", ">", 0)
        // .where("poolBalance", ">", "")
        .where("hide", "==", false)
        .where("paymentActivated", "==", true)
        .get();
    console.log("Fetched");
    const PROJ_FIRESTORE = firesore_proj.docs.map((res) => ({
        ...res.data(),
        id: res.id,
    }));
    const ZOD_PROJ_FIRESTORE = z.array(ZOD_PROJECT).parse(PROJ_FIRESTORE);
    const WALLET = await reach.newAccountFromMnemonic(process.env.MNEMONIC);
    for (let props of ZOD_PROJ_FIRESTORE) {
        const pool_subtraction_amount = {};
        const current_pool = _firestore_pool.doc(props.id);
        const assetInfo_ref = current_pool.collection("assetInfo").doc(props?.id);
        const assetInfo = await assetInfo_ref.get();
        let _assetInfo = assetInfo.data();
        if (props.poolType == "mono-mint") {
            console.log({ mint: props?.poolType });
            let obj = {};
            const _assets = await getAllFormattedHoldersInfo(props?.assets);
            const main_assets = _assets
                ?.map((res) => {
                if (res?.[0]) {
                    return {
                        address: res?.[0]?.address,
                        assetId: res?.[0]?.assetId,
                    };
                }
                return null;
            })
                ?.filter((res) => res);
            for (let assetData of main_assets) {
                obj = {
                    ...obj,
                    [assetData?.assetId]: {
                        ...assetData,
                        eligiblePoints: 0,
                        reward: 0,
                        collected: 0,
                    },
                };
            }
            if (!Object.entries(_assetInfo || {})?.length || !_assetInfo) {
                console.log("doesnt exists");
                await assetInfo_ref.set(obj);
                continue;
            }
            const records = {};
            const floorRecords = {};
            // ! Important variable
            let asset_update_amount = {};
            // ! Important variable
            const a = await assetInfo_ref.get();
            const res = a.data();
            const currentPoolData = await current_pool.get();
            const poolBalance = await currentPoolData.get("poolBalance");
            for (let asset of props?.assets) {
                const ASSET_INFO = z.record(AssetInfoSchema).parse(res);
                const dataBaseAddress = ASSET_INFO?.[asset]?.["address"];
                const chainAddress = obj[asset]["address"];
                if (chainAddress == dataBaseAddress) {
                    const points = ASSET_INFO?.[asset]?.eligiblePoints;
                    // ! dangerous remove later
                    const optedIn = records?.[chainAddress] ??
                        //  @ts-ignore
                        // TODO uncommment line later
                        (await hasOpted_V2(WALLET, props?.contract, chainAddress));
                    records[chainAddress] = optedIn;
                    // console.log({ opted: records?.[chainAddress] });
                    const assetData = ASSET_INFO?.[`${asset}`];
                    if (points + 1 >= HOUR_LIMIT && optedIn) {
                        // console.log("poolBalance", poolBalance);
                        const _floor = props?.rewardType == "manual"
                            ? undefined
                            : floorRecords?.[props?.admin] ??
                                (await getFloor(props?.project));
                        if (_floor) {
                            floorRecords[props?.admin] = _floor;
                        }
                        const amount = await getAmount(props, _floor);
                        if ((poolBalance - amount - pool_subtraction_amount?.[props?.id] ??
                            0) < 0)
                            continue; // ! keep track of amount to subtract at end of loop
                        pool_subtraction_amount[props?.id] =
                            (pool_subtraction_amount?.[props?.id] || 0) + amount;
                        asset_update_amount = {
                            ...asset_update_amount,
                            [`${asset}.reward`]: (asset_update_amount?.[`${asset}.reward`] ??
                                assetData?.reward ??
                                0) + amount,
                            [`${asset}.eligiblePoints`]: 0,
                        };
                        // Promise.all([
                        //   current_pool.update({
                        //     poolBalance: poolBalance - amount,
                        //   }),
                        //   firestore_pool
                        //     .doc(props.id!)
                        //     .collection("assetInfo")
                        //     .doc(`${asset}`)
                        //     .update({
                        //       [`reward`]: (assetData?.reward || 0) + amount,
                        //       [`eligiblePoints`]: 0,
                        //     }),
                        // ]);
                    }
                    else {
                        // console.log("adding", asset);
                        asset_update_amount = {
                            ...asset_update_amount,
                            [`${asset}.eligiblePoints`]: ((asset_update_amount?.[`${asset}.eligiblePoints`] ??
                                assetData?.eligiblePoints ??
                                0) +
                                1) %
                                HOUR_LIMIT,
                        };
                    }
                }
            }
            await assetInfo_ref.update(asset_update_amount);
            const _currentPoolData = await current_pool.get();
            const _poolBalance = await _currentPoolData.get("poolBalance");
            console.log({
                poolBalance,
                pool_subtraction_amount: pool_subtraction_amount[props?.id],
            });
            if (pool_subtraction_amount[props?.id]) {
                await current_pool.update({
                    poolBalance: _poolBalance - (pool_subtraction_amount[props?.id] || 0),
                });
            }
            continue;
        }
        else {
            continue;
            console.log("mint", props?.poolType);
            const _assets = await getAllFormattedHoldersInfo(props?.assets);
            const main_assets = _assets
                .flatMap((res) => res)
                .reduce((prev, next) => {
                return {
                    ...prev,
                    [next.assetId]: {
                        ...(prev?.[next?.assetId] || {}),
                        [next.address]: {
                            count: next.amount,
                            eligiblePoints: 0,
                            reward: 0,
                            collected: 0,
                        },
                    },
                };
            }, {});
            if (!Object.entries(_assetInfo || {})?.length || !_assetInfo) {
                await firestore_pool
                    .doc(props.id)
                    .collection("assetInfo")
                    .doc(props.id)
                    ?.set(main_assets);
                continue;
            }
            const floorRecords = {};
            const records = {};
            // ! Important variable
            let asset_update_amount = {};
            // ! Important variable
            const a = await assetInfo_ref.get();
            const ASSET_INFO = multiMintAssetInfoSchema.parse(a.data());
            const currentPoolData = await current_pool.get();
            const poolBalance = await currentPoolData.get("poolBalance");
            for (let asset in main_assets) {
                const _chainAsset = main_assets[asset];
                for (let chainAddress in _chainAsset) {
                    const _databaseAsset = ASSET_INFO?.[asset];
                    const dbObj = _databaseAsset?.[chainAddress];
                    // const chainObj = _chainAsset[chainAddress];
                    if (!dbObj) {
                        console.log("doesnt exist");
                        await assetInfo_ref.update({
                            [`${asset}.${chainAddress}`]: {
                                eligiblePoints: 0,
                                count: 0,
                                reward: 0,
                                collected: 0,
                            },
                        });
                        continue;
                    }
                    else {
                        const optedIn = records?.[chainAddress] ??
                            (await hasOpted_V2(WALLET, props?.contract, chainAddress));
                        records[chainAddress] = optedIn;
                        // console.log({ opted: records?.[chainAddress] });
                        const assetData = ASSET_INFO?.[`${asset}`]?.[`${chainAddress}`];
                        // console.log({ chainAddress, assetData });
                        if (dbObj?.eligiblePoints + 1 >= HOUR_LIMIT && optedIn) {
                            const _floor = props?.rewardType == "manual"
                                ? undefined
                                : floorRecords?.[props?.admin] ??
                                    (await getFloor(props?.project));
                            if (_floor) {
                                floorRecords[props?.admin] = _floor;
                            }
                            let amount = await getAmount(props, _floor);
                            const finalAmount = amount * assetData.count;
                            if ((poolBalance -
                                finalAmount -
                                pool_subtraction_amount?.[props?.id] ?? 0) < 0) {
                                continue;
                            }
                            asset_update_amount = {
                                [`${asset}.${chainAddress}.reward`]: (assetData?.reward || 0) + finalAmount,
                                [`${asset}.${chainAddress}.eligiblePoints`]: 0,
                            };
                            pool_subtraction_amount[props?.id] =
                                (pool_subtraction_amount?.[props?.id] || 0) + amount;
                            // ! Todo Remove check for token alone and incorporate all checks
                        }
                        else {
                            asset_update_amount = {
                                ...asset_update_amount,
                                [`${asset}.${chainAddress}.eligiblePoints`]: ((assetData?.eligiblePoints || 0) + 1) % HOUR_LIMIT,
                            };
                        }
                    }
                }
            }
            await assetInfo_ref.update(asset_update_amount);
            const _currentPoolData = await current_pool.get();
            const _poolBalance = await _currentPoolData.get("poolBalance");
            console.log({
                pool_subtraction_amount: pool_subtraction_amount[props?.id],
            });
            if (pool_subtraction_amount[props?.id]) {
                await current_pool.update({
                    poolBalance: _poolBalance - (pool_subtraction_amount[props?.id] || 0),
                });
            }
            continue;
        }
    }
};
// await Check();
// process?.exit(0)
// schedule("*/4 * * * *", () => {
//   console.log("Starting Cron Job", cnt);
//   cnt++;
//   RecursiveCheck()
//     .then(() => {
//       console.log({ res: "success" });
//       console.log("Finishing Cron Job");
//     })
//     .catch(console.error);
// });
// RecursiveCheck()
//   .then(() => {
//     console.log({ res: "success" });
//     console.log("Finishing Cron Job");
//   })
//   .catch(console.error);
// await Check();
// process?.exit(0)
// ! 20MIN CRON JOB
schedule("*/5 * * * *", async () => {
    console.log("Starting Cron Job");
    await Check();
    console.log({ res: "success" });
    console.log("Finishing Cron Job");
});
// ! 20MIN CRON JOB
/**
 *
 * !MAIN cron job
 */
// schedule(`0 */2 * * *`, async () => {
//   console.log("Starting Cron Job", cnt);
//   cnt++;
//
//     .catch(console.error);
// });
/**
 * !MAIN cron job
 */
// await Check();
// schedule("* * * * *", () => {
//   console.log("Starting Cron Job", cnt);
//   cnt++;${address}
//   console.log("running a task every minute");
// });
