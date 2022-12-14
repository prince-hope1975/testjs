// import { setAsyncTimeout } from "@utils/helpers";
import algosdk from "algosdk";
import * as dotenv from "dotenv";
import { setAsyncTimeout } from "./common/utils/helpers/index.js";
dotenv.config();
const IS_MAINNET = true;
// do whatever
const indexerServer = IS_MAINNET
    ? "https://mainnet-algorand.api.purestake.io/idx2"
    : "https://testnet-algorand.api.purestake.io/idx2";
// const indexerServer = IS_MAINNET
//   ? "https://mainnet-algorand.api.purestake.io/ps2"
//   : "https://testnet-algorand.api.purestake.io/ps2";
// const token = { "X-API-Key": `${process.env.API_KEY}` };
const token = { "X-API-Key": `${process.env.API_KEY}` };
const port = ` `;
// const port = `${process.env.API_KEY}`;
// const indexerClient = new algosdk.Indexer(token, indexerServer, port);
const indexerClient = new algosdk.Indexer(token, indexerServer, port);
// This fun
export const getAssetData = async (assetId) => {
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
const FormatData = (props, options) => {
    if (options?.format === "cascade") {
        return {
            [props?.assetId || `${props.assetId}`]: {
                ...props,
            },
        };
    }
    return props;
};
const getAssetInformation = async (props = { assetId: 381449561 }) => {
    // if (options?.format === "cascade")
    let assetInfo = await indexerClient
        .searchForAssets()
        .index(props.assetId)
        .do();
    console.log({ assetInfo });
    return assetInfo;
};
export const getHolderAddressOfNFT = async (assetId) => {
    try {
        // console.log({ assetId });
        const assetData = await getAssetData(assetId);
        const { balances } = assetData;
        const filteredData = balances.filter(({ amount }) => amount === 1);
        if (!filteredData[0]?.address) {
            throw new RangeError("Address key does not exist @ getHolderAddressOfNFT");
        }
        const [{ address }] = filteredData;
        return { address, assetId };
    }
    catch (error) {
        throw new Error("Error trying to get nft data @getHolderAddressOfNFT");
    }
};
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
    const holders = await Promise.allSettled(await RateLimitedRequest(arr, 7))
        .then((result) => result.map((res, idx) => res.status === "fulfilled"
        ? res.value
        : {
            address: "error",
            assetId: arr[idx],
        }))
        .then((item) => item.map((data) => {
        return {
            [data.assetId]: {
                ...data,
            },
        };
    }));
    return holders;
};
async function RateLimitedRequest(Array, chunkSize) {
    let data = [];
    for (let i = 0; i < Array.length; i += chunkSize) {
        const chunk = Array.slice(i, i + chunkSize);
        const result = await Promise.allSettled(chunk.map((item) => callFunctionRecursively(getHolderAddressOfNFT, item, i))).then((result) => {
            return result.map((res, idx) => res.status === "fulfilled"
                ? res.value
                : {
                    address: "error",
                    assetId: chunk[idx],
                });
        });
        console.log({ i });
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
// schedule cron job every hour
// cron.schedule('0 0 * * *', () => {
//   console.log('running a task every hour');
// });
// cron.schedule("* */5 * * * *", () => {
//   console.log("running a task every 5 minutes");
// });
// cron.schedule("* * * * *", () => {
//   console.log("running a task every minute");
// });
// schedule("* */3 * * * *", () => {
//   RecursiveCheck()
//     .then((res) => {
//       console.log({ res: "success" });
//     })
//     .catch(console.error);
// });
// run a cron job every 5 minuite
