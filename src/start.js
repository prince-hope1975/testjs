import { getFormattedHoldersInfo } from "./index.js";
import { loadStdlib } from "@reach-sh/stdlib";
import { readDataFromSnapShot, db, } from "./common/utils/backend/firebase/index.js";
import { hasOpted, setReward } from "./common/utils/contract/helpers.js";
// import { FLOOR } from "./common/utils/constants/index.js";
import { schedule } from "node-cron";
import dotenv from "dotenv";
// import { BigNumber } from "@reach-sh/stdlib/shared_impl.js";
import getFloor from "./common/utils/floor/index.js";
dotenv.config();
const HOUR_LIMIT = 12;
// we are trying to keep count of the number of times we have run this function
// so we can stop it after a certain number of times
// GEt data
//  Compare if data is the same
//  if it's the same add a point over 24 hours
// If it changes reset the points
// The mmemonic handles the reward distribution for the user
// Users will have to create their own contracts and have the mmemonic interact with the contract
// Users will need to fund the contract and not the address
export const RecursiveCheck = async () => {
    // Todo : Get the floor price from the contract
    // const floor = await fetch(
    //   "https://www.randswap.com/v1/listings/creator/YYWVXM6ITE2QBD2IOUNMO5DIAILK43ABMBDCE6PHAX3U6GOYO4XPA6JGLQ"
    // )
    //   .then((res) => res.json())
    //   .then((res: queryTypes[]) => {
    //     res.sort((a, b) => {
    //       return a.price - b.price;
    //     });
    //     return res[0].price;
    //   })
    //   .catch(() => console.error);
    // console.log({ floor });
    const USERS_REF = db.ref("/admins");
    const ALL_COLLECTIONS_REF = db.ref("/allCollections");
    const RETRIEVED_COLLECTION = await readDataFromSnapShot(ALL_COLLECTIONS_REF);
    const newMap = RETRIEVED_COLLECTION.map(({ wallet, collection_name }) => {
        return {
            ref: USERS_REF.child(`/${wallet}/${collection_name}/isActive`),
            wallet,
            collection_name,
        };
    });
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
    // console.log({ finalSnap: (filteredObject, null, 4) });
    // console.log({ address: WALLET.networkAccount.addr });
    // let val: jsonSchema = {};
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
            /*
          !TODO: edit the contents of the floor price funciton  to reflect the latest iterations
            */
            /*
          ! TODO: edit the contents of the floor price funciton  to reflect the latest iterations
           */
            for (const [projectName, entry] of Object.entries(objectEntry)) {
                /**
                 * WE RETRIEVE THE ASSET INFO SO FROM THE FIREBASE DATABASE SO WE CAN
                 * COMPARE THE RECENT HOLDERS TO THOSE ALREADY IN OUR DATABASE
                 */
                const PROJECT_REF = db.ref(`admins/${address}/${projectName}`);
                const ASSET_INFO_REF = PROJECT_REF.child("assetInfo");
                const RETRIEVED_ASSET_INFO = entry.assetInfo;
                const RETRIEVED_ASSETS = entry.assets;
                const IS_ACTIVE = entry.isActive;
                const HIDE = entry?.hide;
                const INFO = entry.info;
                const FLOOR = entry?.floor?.value || 1;
                const PERCENT = entry?.percentage?.value || 1;
                const IS_TOKEN = entry?.isToken;
                const DEPOSIT = entry?.dailyRewardAmount;
                const IS_MANUAL = entry?.isManual || false;
                const TOKEN = entry?.token;
                const NETWORK = entry?.network;
                const SHOULD_OVERRIDE_FLOOR = entry?.override || false;
                const reach = loadStdlib("ALGO");
                reach.setProviderByName(NETWORK);
                const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
                // const FREQUENCY = entry.frequency;
                /**
                 * We run this checks so we can premarturely end a project
                 * IF specific conditions are met
                 */
                if (!IS_ACTIVE || HIDE) {
                    console.log("Project is not active");
                    continue;
                }
                // if (END_TIME < new Date().getTime()) {
                //   await PROJECT_REF.set({ ...entry, isActive: false });
                //   console.log({ ended: "Rewards have ended" });
                //   continue;
                // }
                const assetInfosFromChain = await getFormattedHoldersInfo(RETRIEVED_ASSETS);
                let obj = {};
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
                    if ((obj[asset]["eligiblePoints"] || 0) >= HOUR_LIMIT) {
                        // console.log("elgigblepoints", obj[asset]["eligiblePoints"]);
                        const optedIn = await hasOpted(WALLET, chainAddress || dataBaseAddress, INFO, !!IS_TOKEN);
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
                    await ASSET_INFO_REF.child(`${asset}`).set(obj[asset]);
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
                        console.log({ amt, metadata: tokemMetadata });
                    }
                    else {
                        amt = reach.bigNumberToNumber(reach.parseCurrency(amount));
                    }
                    await setReward(WALLET, address, asset, amt, INFO, isToken)
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
// ! 3MIN CRON JOB
// schedule("*/3 * * * *", async () => {
//   console.log("Starting Cron Job", cnt);
//   cnt++;
//   await RecursiveCheck();
//   console.log({ res: "success" });
//   console.log("Finishing Cron Job");
// });
// ! 3MIN CRON JOB
/**
 *
 * !MAIN cron job
 */
schedule(`0 */2 * * *`, async () => {
    console.log("Starting Cron Job", cnt);
    cnt++;
    await RecursiveCheck()
        .then(() => {
        console.log("Finishing Cron Job");
    })
        .catch(console.error);
});
/**
 * !MAIN cron job
 */
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
export default RecursiveCheck;
// run a cron job every 5 minutes
