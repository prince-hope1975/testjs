import { getHolderAddressOfNFT, getFormattedHoldersInfo } from "./index.js";
import { loadStdlib } from "@reach-sh/stdlib";
import { readDataFromSnapShot, db, } from "./common/utils/backend/firebase/index.js";
import { setReward } from "./common/utils/contract/helpers.js";
import { FLOOR } from "./common/utils/constants/index.js";
import { schedule } from "node-cron";
import dotenv from "dotenv";
// TODO : Insert actual contract ASSET_INFO_REF
dotenv.config();
const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
let PERIOD = 24;
// we are trying to keep count of the number of times we have run this function
// so we can stop it after a certain number of times
let count = 0;
const retryRequests = async (item) => {
    if (item.address) {
        return item;
    }
    // @ts-ignore
    return await retryRequests(await getHolderAddressOfNFT(item.assetId));
};
// GEt data
//  Compare if data is the same
//  if it's the same add a point over 24 hours
// If it changes reset the points
// The mmemonic handles the reward distribution for the user
// Users will have to create their own contracts and have the mmemonic interact with the contract
// Users will need to fund the contract and not the address
export const RecursiveCheck = async () => {
    const USERS_REF = db.ref("/admins");
    const RETRIEVED_DATA = await readDataFromSnapShot(USERS_REF);
    const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    // console.log({ address: WALLET.networkAccount.addr });
    let val = {};
    const entries = Object.entries(RETRIEVED_DATA);
    /**
     * We map through all the assets to be able to store the locally so we can use it in our server
     * We use it for authentication to confirm if our user has the asset in their wallet
     */
    entries.forEach(([_, two]) => {
        const entry = Object.entries(two);
        entry.forEach(([name, { assets, expectedAPY, ending, isActive, started }]) => {
            val = {
                ...val,
                [name]: { assets, expectedAPY, ending, isActive, started },
            };
        });
    });
    // usersRepo.createAll(val);
    /**
     * Map through both the data in the centralized database and that gotten from the chain and use that data
     * We use both data points to validate our logic
     */
    console.log({ count });
    for (const [address, objectEntry] of entries) {
        for (const [projectName, entry] of Object.entries(objectEntry)) {
            /**
             * WE RETRIEVE THE ASSET INFO SO FROM THE FIREBASE DATABASE SO WE CAN
             * COMPARE THE RECENT HOLDERS TO THOSE ALREADY IN OUR DATABASE
             */
            const PROJECT_REF = db.ref(`admins/${address}/${projectName}`);
            const ASSET_INFO_REF = PROJECT_REF.child("assetInfo");
            const RETRIEVED_ASSET_INFO = entry.assetInfo;
            const RETRIEVED_ASSETS = entry.assets;
            const IS_ACTIVE = entry.isActive || true;
            const END_TIME = entry.ending;
            // const DURATION = entry.duration;
            const FREQUENCY = entry.frequency;
            // const DB_COUNT =
            //   entry.count ||
            //   (() => {
            //     PROJECT_REF.set({ count: 0 });
            //     return 0;
            //   })();
            /**
             * We run this checks so we can premarturely end a project
             * IF specific conditions are met
             */
            if (!IS_ACTIVE) {
                return;
            }
            if (END_TIME < new Date().getTime()) {
                PROJECT_REF.set({ ...entry, Active: false });
                return console.log({ ended: "Rewards have ended" });
            }
            if (FREQUENCY <= count)
                return;
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
                return;
            }
            for (let asset of RETRIEVED_ASSETS) {
                const dataBaseAddress = RETRIEVED_ASSET_INFO[asset]["address"];
                const chainAddress = obj[asset]["address"];
                if (chainAddress === dataBaseAddress) {
                    console.log("Same Address.....");
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
                // console.log({ eleigiblePoints: obj[asset]["eligiblePoints"] });
                if ((obj[asset]["eligiblePoints"] || 0) >= 24) {
                    // console.log("Adding Points");
                    // const hasOpted = await ctcAdmin.unsafeViews.Info.opted(chainAddress);
                    // if (!hasOpted) await ctcAdmin.a.User.optin();
                    await setReward(WALLET, chainAddress || dataBaseAddress, FLOOR * 0.4 * (1 / 365));
                    // console.log({ res });
                    obj[asset]["eligiblePoints"] = 0;
                    // console.log(`Setting reward for ${chainAddress} \n`);
                }
                // console.log({ obj: obj[asset] });
                await ASSET_INFO_REF.child(`${asset}`).set(obj[asset]);
            }
        }
    }
    if (count === PERIOD) {
        count = 0;
        return;
    } // We increment the count so we can stop the function after a certain number of times
    count++;
    // console.log({ data, obj, entries });
};
// const APY = 10 / 365 / 24;
let cnt = 0;
schedule("*/5 * * * *", () => {
    console.log("Starting Cron Job", cnt);
    cnt++;
    RecursiveCheck()
        .then(() => {
        console.log({ res: "success", });
        console.log("Finishing Cron Job");
    })
        .catch(console.error);
});
export default RecursiveCheck;
// run a cron job every 5 minutes
