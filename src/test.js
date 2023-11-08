import { loadStdlib } from "@reach-sh/stdlib";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("MainNet");
import * as dotenv from "dotenv";
import { hasOpted, setReward } from "./common/utils/contract/helpers.js";
import { HOUR_LIMIT } from "./start.js";
import getFloor from "./common/utils/floor/index.js";
dotenv.config();
const Provider = await reach.getProvider();
const Indexer = Provider.indexer;
// const token = { "X-API-Key": `${process.env.API_KEY}` };
// const port = `${process.env.API_KEY}`;
// const indexerClient = new algosdk.Indexer(token, indexerServer, port);
// = new algosdk.Indexer(token, indexerServer, port);
const indexerClient = Indexer;
const getAssetData = async (assetId) => {
    if (!assetId) {
        throw new Error("asset id is undefined");
    }
    try {
        let assetInfo = await indexerClient
            .lookupAssetBalances(Number(assetId))
            .do();
        return assetInfo;
    }
    catch (error) {
        console.log(error);
        return { balances: [] };
    }
};
export const getAllHolderAddressOfNFT = async (assetId, currentCall = 0) => {
    try {
        const assetData = await getAssetData(assetId);
        const { balances } = assetData;
        const filteredData = balances.filter(({ amount }) => amount >= 1);
        if (!filteredData[0]?.address) {
            if (currentCall > 2) {
                throw new RangeError("Address key does not exist @ getHolderAddressOfNFT");
            }
            console.log("trying again");
            return getAllHolderAddressOfNFT(assetId, currentCall + 1);
        }
        const data = filteredData.map((res) => ({ ...res, assetId }));
        return data;
    }
    catch (error) {
        // return await getHolderAddressOfNFT(assetId, currentCall + 1);
        throw new Error("Error trying to get nft data @getHolderAddressOfNFT");
    }
};
export const getAllFormattedHoldersInfo = async (arr) => {
    if (arr.length === 0) {
        console.error("Empty Array @getHoldersAddresses");
        // @ts-ignore
        throw new Error("Array Bounds Invalid", { cause: "Invalid Array Length" });
    }
    const holders = await processArrayChunks(arr, 25, getAllHolderAddressOfNFT);
    return holders;
};
async function processArrayChunks(inputArray, chunkSize, func) {
    // Initialize an array to store the results
    let results = [];
    // Loop through the inputArray in chunks
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        // Extract a chunk of the array with chunkSize
        const chunk = inputArray.slice(i, i + chunkSize);
        // Call the func on the chunk and store the result
        const response = await Promise?.all(chunk.map(async (res) => await func(res)));
        results = [...results, ...response];
    }
    return results;
}
// const getHolders = () => {};
console.log("starting");
// const g = await getAllFormattedHoldersInfo([
//   1227091102, 1221207200, 1215598510, 1203555523,
// ]);
export const handleMultiMint = async (address, projectName, entry, PROJECT_REF) => {
    const RETRIEVED_ASSET_INFO = entry?.assetInfo;
    let INFO = entry?.info;
    const RETRIEVED_ASSETS = entry?.assets;
    const IS_TOKEN = entry?.isToken;
    const VERSION = entry?.version || "v4";
    const NETWORK = entry?.network;
    const IS_MANUAL = entry?.isManual || false;
    const TOKEN = entry?.token;
    const SHOULD_OVERRIDE_FLOOR = entry?.override || false;
    const FLOOR = entry?.floor?.value || 1;
    const DEPOSIT = entry?.dailyRewardAmount;
    const PERCENT = entry?.percentage?.value || 1;
    const ASSET_INFO_REF = PROJECT_REF?.child("assetInfo");
    const MONITOR_ASSETS_REF = PROJECT_REF?.child("MONITOR");
    const reach = loadStdlib("ALGO");
    reach.setProviderByName(NETWORK);
    const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    const _assets = await getAllFormattedHoldersInfo(RETRIEVED_ASSETS);
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
                },
            },
        };
    }, {});
    if (!RETRIEVED_ASSET_INFO) {
        await ASSET_INFO_REF?.set(main_assets);
        return;
    }
    console.log({ assets: Object.keys(main_assets) });
    for (let asset in main_assets) {
        // console.log("starting ", asset);
        const _databaseAsset = RETRIEVED_ASSET_INFO?.[asset];
        const _chainAsset = main_assets[asset];
        for (let chainAddress in _chainAsset) {
            const dbObj = _databaseAsset?.[chainAddress];
            const chainObj = _chainAsset[chainAddress];
            if (!dbObj) {
                await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`).update({
                    ...chainObj,
                });
            }
            else {
                const optedIn = await hasOpted(WALLET, chainAddress, reach.bigNumberToNumber(INFO), !!IS_TOKEN, VERSION).catch(async (err) => {
                    try {
                        console.error(err);
                        return await hasOpted(WALLET, chainAddress, reach.bigNumberToNumber(INFO), !!IS_TOKEN, VERSION);
                    }
                    catch (error) {
                        return false;
                    }
                });
                if (optedIn) {
                    await Promise.all([
                        MONITOR_ASSETS_REF?.update({
                            [address]: { projectName },
                        }),
                        MONITOR_ASSETS_REF?.child(`${address}/assets`).update({
                            [asset]: asset,
                        }),
                    ]);
                }
                if (dbObj?.eligiblePoints + 1 >= HOUR_LIMIT && optedIn) {
                    console.log({
                        optedIn,
                        eligiblePoints: dbObj.eligiblePoints,
                        chainAddress,
                    });
                    console.log("Eligible", chainAddress);
                    if (optedIn) {
                        let amount = 0;
                        console.log("opted id");
                        // ! Todo Remove check for token alone and incorporate all checks
                        let FLOOR_PRICE = 0;
                        if (!IS_MANUAL) {
                            if (SHOULD_OVERRIDE_FLOOR) {
                                FLOOR_PRICE = FLOOR;
                            }
                            else {
                                FLOOR_PRICE =
                                    (await getFloor(projectName).catch((_) => 0)) || 0;
                            }
                            amount = ((FLOOR_PRICE || FLOOR) * (PERCENT / 100)) / 365;
                        }
                        else {
                            FLOOR_PRICE = DEPOSIT || (FLOOR * (PERCENT / 100)) / 365;
                            amount = FLOOR_PRICE;
                        }
                        let amt = 0;
                        if (IS_TOKEN) {
                            const tokemMetadata = await WALLET.tokenMetadata(TOKEN?.value);
                            amt = reach.bigNumberToNumber(reach.parseCurrency(amount, 
                            // @ts-ignore
                            +reach.bigNumberToNumber(tokemMetadata?.decimals)));
                            // console.log({ amt, metadata: tokemMetadata });
                        }
                        else {
                            amt = reach.bigNumberToNumber(reach.parseCurrency(amount));
                        }
                        console.log("setting rewards", dbObj, chainAddress);
                        await setReward(WALLET, chainAddress, +asset, amt * +(chainObj?.count || 1), reach?.bigNumberToNumber(INFO), IS_TOKEN, VERSION)
                            .then((_) => console.log(`Finished setting the rewards for ${address} and the amount was ${amt}/${amount}`))
                            .catch((err) => {
                            console.log("Failed to set ", err);
                        });
                    }
                    await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`)
                        .update({
                        eligiblePoints: 0,
                    })
                        .catch(console.error);
                }
                else {
                    await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`).update({
                        ...chainObj,
                        eligiblePoints: (dbObj?.eligiblePoints + 1) % HOUR_LIMIT,
                    });
                }
            }
        }
    }
    return main_assets;
};
// const g = await handleMultiMint();
// console.log({
//   g: JSON.stringify(g, null, 2),
// });
// console.log("ending");
