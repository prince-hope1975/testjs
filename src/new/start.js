// Database handler
import { getFormattedHoldersInfo, reach } from "../index.js";
import { loadStdlib } from "@reach-sh/stdlib";
import { readDataFromSnapShot, db as newDb, } from "../common/utils/backend/firebase/index.js";
import { getPoolBalance, hasOpted, setReward, } from "../common/utils/contract/helpers.js";
import dotenv from "dotenv";
import getFloor from "../common/utils/floor/index.js";
import { writeFile, open } from "fs/promises";
import { getAllFormattedHoldersInfo, handleMultiMint } from "../test.js";
import { AssetInfoSchema, ZOD_PROJECT, multiMintAssetInfoSchema, } from "./zod.js";
import { _fireDb, _firestore_pool, fireDb, firestore_pool, } from "./helpers/db.js";
import { z } from "zod";
import { hasOpted_V2 } from "./contracts.js";
import { schedule } from "node-cron";
// TODO : Insert actual contract ASSET_INFO_REF
dotenv.config();
export const HOUR_LIMIT = 12;
const backupDatabase = async (data) => {
    const filePath = `/backups/db_${+new Date()}.json`;
    try {
        await open(filePath, "O_CREAT");
        writeFile(filePath, data);
    }
    catch (error) {
        console.error(error);
    }
};
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
export const Check = async () => {
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
            // continue;
            console.log({ mint: props?.poolType });
            let obj = {};
            const assetInfosFromChain = await getFormattedHoldersInfo(props.assets);
            const chainAddressAndAssetId = assetInfosFromChain.reduce((a, v) => ({ ...a, ...v }), {});
            for (let assetData in chainAddressAndAssetId) {
                obj = {
                    ...obj,
                    [assetData]: {
                        ...chainAddressAndAssetId[assetData],
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
                    if (points + 1 >= HOUR_LIMIT) {
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
                            [`${asset}.eligiblePoints`]: (asset_update_amount?.[`${asset}.eligiblePoints`] ??
                                assetData?.eligiblePoints ??
                                0) + 1,
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
                                [`${asset}.${chainAddress}.eligiblePoints`]: (assetData?.eligiblePoints || 0) + 1,
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
const count = async () => {
    const firesore_proj = await firestore_pool
        // .where("active", "==", true)
        // .where("poolBalance", ">", 0)
        // // .where("poolBalance", ">", "")
        // .where("hide", "==", false)
        // .where("paymentActivated", "==", true)
        .get();
    const p = await firesore_proj.docs.map(async (res) => ({
        id: res.id,
        assets: await res.get("assets"),
    }));
    const k = (await Promise.all(p)).map(async (res) => {
        const assetInfo = await firestore_pool
            .doc(res.id)
            .collection("assetInfo")
            .count();
        const q = await assetInfo.get();
        return { ...q.data(), res: res?.assets?.length };
    });
    return console.log({ k: await Promise.all(k) });
};
const Checking = async () => {
    const firesore_proj = await firestore_pool
        .where("active", "==", true)
        .where("poolBalance", ">", 0)
        // .where("poolBalance", ">", "")
        .where("hide", "==", false)
        .where("paymentActivated", "==", true)
        // .select("assetInfo")
        .get();
    // const h = await firesore_proj
    const p = firesore_proj.docs.map((res) => res?.id);
    const data = firesore_proj.docs.map((res) => ({
        id: res.id,
        ...res?.data(),
    }));
    for (let item of data) {
        await batchAddDocumentsWithCustomIds(Object.entries(item?.assetInfo).map((res) => ({ id: res[0], ...res[1] })), firestore_pool.doc(item?.id).collection("assetInfo"));
    }
    return;
    const d = data
        .map(async (res) => {
        const assetInfo = await firestore_pool
            .doc(res?.id)
            .collection("assetInfo")
            .get();
        const data = assetInfo.docs[0].data();
        const entries = Object.entries(data);
        const _entries = await Promise.all(entries.map(async ([str, obj]) => {
            await firestore_pool
                .doc(res)
                .collection("assetInfo")
                .doc(str)
                .set(obj);
        }));
    })
        .flatMap((res) => res);
    const a = await Promise.all(d);
    console.log({ a, p });
};
async function batchAddDocumentsWithCustomIds(dataArray, collectionRef) {
    const batchSize = 500; // Batch size (Firestore limit is 500 writes per batch)
    // Create an array to store batches of write operations
    const batches = [];
    // Loop through the data array and create batches
    for (let i = 0; i < dataArray.length; i += batchSize) {
        const batch = _fireDb.batch();
        // Process a batch of data
        for (let j = i; j < i + batchSize && j < dataArray.length; j++) {
            const { id, ...rest } = dataArray[j];
            const documentRef = collectionRef.doc(id); // Use custom ID
            batch.set(documentRef, rest);
        }
        batches.push(batch);
    }
    // Execute the batches sequentially
    for (const batch of batches) {
        try {
            await batch.commit();
            console.log("Batch write successful");
        }
        catch (error) {
            console.error("Error writing batch", error);
        }
    }
}
async function batchUpdateDocs(dataArray, collectionRef) {
    const batchSize = 500; // Batch size (Firestore limit is 500 writes per batch)
    // Create an array to store batches of write operations
    const batches = [];
    // Loop through the data array and create batches
    for (let i = 0; i < dataArray.length; i += batchSize) {
        const batch = fireDb.batch();
        // Process a batch of data
        for (let j = i; j < i + batchSize && j < dataArray.length; j++) {
            const { id, ...rest } = dataArray[j];
            const documentRef = collectionRef.doc(id); // Use custom ID
            batch.update(documentRef, rest);
        }
        batches.push(batch);
    }
    // Execute the batches sequentially
    for (const batch of batches) {
        try {
            await batch.commit();
            console.log("Batch update successful");
        }
        catch (error) {
            console.error("Error writing batch", error);
        }
    }
}
const RecursiveCheck = async () => {
    console.log("beginning");
    const USERS_REF = newDb.ref("/admins");
    const ALL_COLLECTIONS_REF = newDb.ref("/allCollections");
    const RETRIEVED_COLLECTION = await readDataFromSnapShot(ALL_COLLECTIONS_REF);
    const newMap = RETRIEVED_COLLECTION.map(({ wallet, collection_name }) => {
        return {
            ref: USERS_REF.child(`/${wallet}/${collection_name}/isActive`),
            wallet,
            collection_name,
        };
    }).reverse();
    const newSnap = newMap.map(async ({ ref, wallet, collection_name }) => {
        const isActive = await readDataFromSnapShot(ref);
        if (isActive) {
            return {
                [wallet]: {
                    [collection_name]: await readDataFromSnapShot(USERS_REF.child(`/${wallet}/${collection_name}/`)),
                },
            };
        }
        else {
            return {};
        }
    }) || [];
    const filteredObject = (await Promise.all(newSnap)).filter((p) => Object.keys(p).length !== 0);
    console.log("middle 2");
    for (const RETRIEVED_DATA of filteredObject) {
        const entries = Object.entries(RETRIEVED_DATA);
        let infos = [];
        /**
         * We map through all the assets to be able to store the locally so we can use it in our server
         * We use it for authentication to confirm if our user has the asset in their wallet
         */
        /**
         * Map through both the data in the centralized database and that gotten from the chain and use that data
         * We use both data points to validate our logic
         */
        for (const [address, objectEntry] of entries) {
            console.log("started entries");
            /*
          !TODO: edit the contents of the floor price funciton  to reflect the latest iterations
            */
            /*
          ! TODO: edit the contents of the floor price funciton  to reflect the latest iterations
           */
            for (const [projectName, entry] of Object.entries(objectEntry).reverse()) {
                console.log({ projectName, address });
                // console.log({ projectName });
                /**
                 * WE RETRIEVE THE ASSET INFO SO FROM THE FIREBASE DATABASE SO WE CAN
                 * COMPARE THE RECENT HOLDERS TO THOSE ALREADY IN OUR DATABASE
                 */
                const PROJECT_REF = newDb.ref(`admins/${address}/${projectName}`);
                // !
                const MONITOR_ASSETS_REF = PROJECT_REF.child("MONITOR");
                // !
                const ASSET_INFO_REF = PROJECT_REF.child("assetInfo");
                const RETRIEVED_ASSET_INFO = entry.assetInfo;
                const RETRIEVED_ASSETS = entry.assets;
                const IS_ACTIVE = entry.isActive;
                const HIDE = entry?.hide;
                let INFO = entry.info;
                const FLOOR = entry?.floor?.value || 1;
                const PERCENT = entry?.percentage?.value || 1;
                const IS_TOKEN = entry?.isToken;
                const DEPOSIT = entry?.dailyRewardAmount;
                const IS_MANUAL = entry?.isManual || false;
                const TOKEN = entry?.token;
                const NETWORK = entry?.network;
                const VERSION = entry?.version || "v3";
                const SHOULD_OVERRIDE_FLOOR = entry?.override || false;
                const PAYMENT_ACTIVATED = entry?.paymentActivated;
                const BACKEND_TYPE = entry?.backendType || "mono-mint";
                const reach = loadStdlib("ALGO");
                const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
                reach.setProviderByName(NETWORK);
                // firestore_pool.add(h);
                // const FREQUENCY = entry.frequency;
                const poolB = await getPoolBalance(WALLET, reach.bigNumberToNumber(INFO), !!IS_TOKEN, TOKEN?.value, VERSION);
                console.log({ poolB });
                // return console.log({
                //   BACKEND_TYPE,
                //   str: JSON.stringify(RETRIEVED_ASSET_INFO, null, 2),
                // });
                const z = ZOD_PROJECT.parse({
                    admin: address,
                    project: projectName,
                    active: IS_ACTIVE,
                    assets: RETRIEVED_ASSETS,
                    contract: reach.bigNumberToNumber(INFO),
                    poolType: BACKEND_TYPE,
                    assetInfo: RETRIEVED_ASSET_INFO,
                    network: NETWORK,
                    percent: PERCENT,
                    poolBalance: +poolB,
                    type: IS_TOKEN ? "token" : "algo",
                    floor: !IS_TOKEN ? FLOOR : undefined,
                    token: IS_TOKEN ? TOKEN?.value : undefined,
                    rewardType: IS_MANUAL ? "manual" : "floor",
                    overrideFloor: !IS_MANUAL ? SHOULD_OVERRIDE_FLOOR : undefined,
                    dailyReward: IS_MANUAL ? DEPOSIT : undefined,
                });
                const { assetInfo, ...rest } = z;
                console.log("Before batching", JSON.stringify(z, null, 2));
                const deter = await _firestore_pool.add(rest);
                await deter.collection("assetInfo").doc(deter.id).set(assetInfo);
                console.log("added to pool", deter.id);
                console.log("After batching");
                continue;
                return;
                if (poolB == 0) {
                    continue;
                }
                /**
                 * We run this checks so we can premarturely end a project
                 * IF specific conditions are met
                 */
                if (!(typeof INFO == "undefined" || typeof INFO == undefined)) {
                    if (typeof INFO == "object") {
                        INFO = reach.bigNumberToNumber(INFO);
                    }
                }
                if (IS_ACTIVE == false || HIDE) {
                    console.log("Project is not active");
                    continue;
                }
                if (PAYMENT_ACTIVATED == false) {
                    continue;
                }
                if (BACKEND_TYPE == "multi-mint") {
                    console.log({ BACKEND_TYPE });
                    await handleMultiMint(address, projectName, entry, PROJECT_REF);
                    continue;
                }
                else {
                    // continue;
                }
                const assetInfosFromChain = await getFormattedHoldersInfo(RETRIEVED_ASSETS);
                let obj = {};
                console.log("started reducing line 178");
                const chainAddressAndAssetId = assetInfosFromChain.reduce((a, v) => ({ ...a, ...v }), {});
                for (let assetData in chainAddressAndAssetId) {
                    obj = {
                        ...obj,
                        [assetData]: {
                            ...chainAddressAndAssetId[assetData],
                            eligiblePoints: 0,
                        },
                    };
                }
                if (!RETRIEVED_ASSET_INFO) {
                    ASSET_INFO_REF.set(obj);
                    continue;
                }
                for (let asset of RETRIEVED_ASSETS) {
                    const dataBaseAddress = RETRIEVED_ASSET_INFO[asset]["address"];
                    const chainAddress = obj[asset]["address"];
                    if (chainAddress === dataBaseAddress) {
                        // TODO: Add later
                        // console.log("Same Address.....", projectName);
                        obj[asset] = {
                            ...obj[asset],
                            eligiblePoints: (RETRIEVED_ASSET_INFO[asset]["eligiblePoints"] || 0) + 1,
                        };
                        // execute a call to the contract that allocates an amount of the reward to this address
                        // clear the value of the eligible points
                    }
                    else {
                        const address = obj[asset]["address"];
                        obj[asset] = {
                            ...RETRIEVED_ASSET_INFO[asset],
                            address,
                            eligiblePoints: 0,
                        };
                    }
                    // console.log("Opting in 222")
                    const optedIn = await hasOpted(WALLET, chainAddress || dataBaseAddress, INFO, !!IS_TOKEN, VERSION);
                    // console.log({ asset, optedIn, projectName, address });
                    if (optedIn) {
                        await Promise.allSettled([
                            MONITOR_ASSETS_REF.child(`${address}/assets`).update({
                                [asset]: asset,
                            }),
                        ]);
                        console.log("Updating", { asset });
                    }
                    if ((obj[asset]["eligiblePoints"] || 0) >= HOUR_LIMIT) {
                        // console.log("elgigblepoints", obj[asset]["eligiblePoints"]);
                        if (optedIn) {
                            let amount = 0;
                            // ! Todo Remove check for token alone and incorporate all checks
                            let FLOOR_PRICE = 0;
                            if (!IS_MANUAL) {
                                if (SHOULD_OVERRIDE_FLOOR) {
                                    FLOOR_PRICE = FLOOR;
                                }
                                else {
                                    FLOOR_PRICE = (await getFloor(projectName)) || 0;
                                }
                                amount = ((FLOOR_PRICE || FLOOR) * (PERCENT / 100)) / 365;
                            }
                            else {
                                FLOOR_PRICE = DEPOSIT || (FLOOR * (PERCENT / 100)) / 365;
                                amount = FLOOR_PRICE;
                            }
                            // const canSet = await canSetReward(
                            //   WALLET,
                            //   amount,
                            //   INFO as unknown as number,
                            //   !!IS_TOKEN,
                            //   VERSION
                            // );
                            infos = [
                                ...infos,
                                {
                                    asset: asset,
                                    eligiblePoints: obj[asset]["eligiblePoints"] || 0,
                                    address: chainAddress || dataBaseAddress,
                                    amount,
                                    isToken: IS_TOKEN,
                                    token: TOKEN?.value,
                                },
                            ];
                        }
                        obj[asset]["eligiblePoints"] = 0;
                    }
                    // Promise.allSettled(
                    await ASSET_INFO_REF.child(`${asset}`).set(obj[asset]);
                    // ]);
                }
                console.log({ length: infos.length, infos });
                for (let item of infos) {
                    const { address, amount, isToken, token, asset } = item;
                    let amt = 0;
                    if (isToken) {
                        const tokemMetadata = await WALLET.tokenMetadata(token);
                        amt = reach.bigNumberToNumber(reach.parseCurrency(amount, 
                        // @ts-ignore
                        +reach.bigNumberToNumber(tokemMetadata?.decimals)));
                        // console.log({ amt, metadata: tokemMetadata });
                    }
                    else {
                        amt = reach.bigNumberToNumber(reach.parseCurrency(amount));
                    }
                    await setReward(WALLET, address, asset, amt, INFO, isToken, VERSION)
                        .then((_) => console.log(`Finished setting the rewards for ${address} and the amount was ${amt}/${amount}`))
                        .catch(async (err) => {
                        console.log("Error, when setting rewards for", projectName, "\n", "Trying again in 5 seconds", "\n", err);
                        await setReward(WALLET, address, asset, amt, INFO, isToken)
                            .then((_) => console.log(`Finished setting the rewards for ${address} and the amount was ${amt}/${amount}`))
                            .catch(() => {
                            console.log("Failed again");
                        });
                    });
                }
            }
        }
    }
    try {
        backupDatabase(JSON.stringify(RETRIEVED_COLLECTION));
    }
    catch (error) {
        console.error(error);
    }
};
// const APY = 10 / 365 / 24;
let cnt = 0;
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
// ! 20MIN CRON JOB
// await Check();
schedule("*/20 * * * *", async () => {
    console.log("Starting Cron Job", cnt);
    cnt++;
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
//   await RecursiveCheck()
//     .then(() => {
//       console.log("Finishing Cron Job");
//     })
//     .catch(console.error);
// });
/**
 * !MAIN cron job
 */
// await Check();
// schedule("* * * * *", () => {
//   console.log("Starting Cron Job", cnt);
//   cnt++;${address}
//   RecursiveCheck()
//     .then(() => {
//       console.log("Finishing Cron Job");
//     })
//     .catch(console.error);
//   console.log("running a task every minute");
// });
//schedule a cron job every hour
// schedule a cron job to run every 10 minutes
// export default RecursiveCheck;
// run a cron job every 5 minutes
