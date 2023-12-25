import * as dotenv from "dotenv";
import { setAsyncTimeout } from "../../../common/utils/helpers/index.js";
import { loadStdlib } from "@reach-sh/stdlib";
import { processArrayChunks } from "../../../test.js";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("MainNet");
dotenv.config();
const IS_MAINNET = true;
// do whatever
const indexerServer = IS_MAINNET
    ? "https://mainnet-algorand.api.purestake.io/idx2"
    : "https://testnet-algorand.api.purestake.io/idx2";
// const indexerServer = IS_MAINNET
//   ? "https://mainnet-algorand.api.purestake.io/ps2"
//   : "https://testnet-algorand.api.purestake.io/ps2";
const Provider = await reach.getProvider();
const Indexer = Provider.indexer;
// const token = { "X-API-Key": `${process.env.API_KEY}` };
const token = { "X-API-Key": `${process.env.API_KEY}` };
const port = ` `;
// const port = `${process.env.API_KEY}`;
// const indexerClient = new algosdk.Indexer(token, indexerServer, port);
// = new algosdk.Indexer(token, indexerServer, port);
const indexerClient = Indexer;
// This fun
export const getAssetData = async (assetId, index) => {
    if (!assetId) {
        throw new Error("asset id is undefined");
    }
    try {
        let assetInfo = await (index ?? indexerClient)
            .lookupAssetBalances(Number(assetId))
            .do();
        return assetInfo;
    }
    catch (error) {
        console.log(error);
        return { balances: [] };
    }
};
// const FormatData = (
//   props: {
//     assetId: string | number | null;
//     address: string | null;
//     [any: string]: any | undefined;
//   },
//   options?: {
//     format?: "default" | "cascade";
//   }
// ) => {
//   if (options?.format === "cascade") {
//     return {
//       [props?.assetId || `${props.assetId}`]: {
//         ...props,
//       },
//     };
//   }
//   return props;
// };
// const getAssetInformation = async (
//   props: { assetId: number } = { assetId: 381449561 }
// ) => {
//   // if (options?.format === "cascade")
//   let assetInfo = await indexerClient
//     .searchForAssets()
//     .index(props.assetId)
//     .do();
//   console.log({ assetInfo });
//   return assetInfo;
// };
export async function getHolderAddressOfNFT(assetId, currentCall = 0, ind) {
    try {
        // console.log({ assetId });
        const assetData = await getAssetData(assetId, ind);
        const { balances } = assetData;
        const filteredData = balances.filter(({ amount }) => amount === 1);
        if (!filteredData[0]?.address) {
            if (currentCall > 4) {
                throw new RangeError("Address key does not exist @ getHolderAddressOfNFT");
            }
            console.log("trying again", assetId);
            return getHolderAddressOfNFT(assetId, currentCall + 1);
        }
        const [{ address }] = filteredData;
        return { address, assetId };
    }
    catch (error) {
        // return await getHolderAddressOfNFT(assetId, currentCall + 1);
        throw new Error("Error trying to get nft data @getHolderAddressOfNFT");
    }
}
export const getHoldersInfo = async (arr) => {
    if (arr.length === 0) {
        console.error("Empty Array @getHoldersAddresses");
        throw new Error("Out of bounds Array given as argumnet");
    }
    const holders = await Promise.allSettled(arr.map((item) => getHolderAddressOfNFT(item))).then((result) => result.map((res, idx) => res.status === "fulfilled"
        ? res.value
        : {
            address: "error",
            assetId: arr[idx],
        }));
    return holders;
};
export const getAcctAssets = async (acct) => {
    try {
        let accountInfo = await indexerClient.lookupAccountByID(acct).do();
        return accountInfo;
    }
    catch (error) {
        console.log(error);
        console.trace();
        throw error;
    }
};
export const getFormattedHoldersInfo = async (arr) => {
    if (arr.length === 0) {
        console.error("Empty Array @getHoldersAddresses");
        // @ts-ignore
        throw new Error("Array Bounds Invalid", { cause: "Invalid Array Length" });
    }
    const reach = loadStdlib("ALGO");
    const Provider = await reach.getProvider();
    const Indexer = Provider.indexer;
    const indexerClient = Indexer;
    const _holders = await processArrayChunks(arr, 25, getHolderAddressOfNFT, indexerClient);
    return _holders;
};
async function RateLimitedRequest(Array, chunkSize) {
    let data = [];
    for (let i = 0; i < Array.length; i += chunkSize) {
        const chunk = Array.slice(i, i + chunkSize);
        const result = await Promise.allSettled(chunk.map((item) => callFunctionRecursively(getHolderAddressOfNFT, item, i, 7))).then((result) => {
            return result.map((res, idx) => res.status === "fulfilled"
                ? res.value
                : {
                    address: "error",
                    assetId: chunk[idx],
                });
        });
        // !can add later
        // console.log({ i });
        data = [...result, ...data];
        // await setAsyncTimeout(500);
    }
    return data;
}
const callFunctionRecursively = async (func, param, i = 0, treashold = 5) => {
    try {
        return await func(param);
    }
    catch (error) {
        if (i >= treashold) {
            console.error(`Asset ID ${param} seems invalid:  `, error);
            return { address: "None", assetId: param };
        }
        await setAsyncTimeout(500);
        console.log("Calling again after an error at ", i);
        return callFunctionRecursively(func, param, i + 1);
    }
};
