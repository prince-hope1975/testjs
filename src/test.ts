import { data } from "./common/datatypes/types";
import { loadStdlib } from "@reach-sh/stdlib";
import { Indexer as indexer } from "algosdk";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("MainNet");
import * as dotenv from "dotenv";
import { Project } from "./common/datatypes/retireveddata";
import { Reference } from "firebase-admin/database";
import { hasOpted, setReward } from "./common/utils/contract/helpers.js";
import { BigNumber, HOUR_LIMIT } from "./start.js";
import { wallet } from "./common/utils/airdrop/type";
import getFloor from "./common/utils/floor/index.js";
dotenv.config();

const Provider = await reach.getProvider();
const Indexer: indexer = Provider.indexer;
// const token = { "X-API-Key": `${process.env.API_KEY}` };

// const port = `${process.env.API_KEY}`;
// const indexerClient = new algosdk.Indexer(token, indexerServer, port);
// = new algosdk.Indexer(token, indexerServer, port);
const indexerClient = Indexer;
const getAssetData = async (assetId: string | number) => {
  if (!assetId) {
    throw new Error("asset id is undefined");
  }
  try {
    let assetInfo = await indexerClient
      .lookupAssetBalances(Number(assetId))
      .do();
    return assetInfo;
  } catch (error) {
    console.log(error);
    return { balances: [] };
  }
};
export const getAllHolderAddressOfNFT = async (
  assetId: number | string,
  currentCall = 0
): Promise<(data & { assetId: string | number })[]> => {
  try {
    const assetData = await getAssetData(assetId);
    const { balances } = assetData;
    const filteredData: Array<data> = balances.filter(
      ({ amount }: data) => amount >= 1
    );
    if (!filteredData[0]?.address) {
      if (currentCall > 4) {
        throw new RangeError(
          "Address key does not exist @ getHolderAddressOfNFT"
        );
      }
      console.log("trying again");
      return getAllHolderAddressOfNFT(assetId, currentCall + 1);
    }
    const data = filteredData.map((res) => ({ ...res, assetId }));
    return data;
  } catch (error) {
    // return await getHolderAddressOfNFT(assetId, currentCall + 1);
    throw new Error("Error trying to get nft data @getHolderAddressOfNFT");
  }
};
export const getAllFormattedHoldersInfo = async (arr: number[] | string[]) => {
  if (arr.length === 0) {
    console.error("Empty Array @getHoldersAddresses");
    // @ts-ignore
    throw new Error("Array Bounds Invalid", { cause: "Invalid Array Length" });
  }
  const holders = await processArrayChunks(arr, 25, getAllHolderAddressOfNFT);

  return holders;
};
async function processArrayChunks<T, R>(
  inputArray: T[],
  chunkSize: number,
  func: (chunk: T) => R
): Promise<Awaited<R>[]> {
  // Initialize an array to store the results
  let results: Awaited<R>[] = [];

  // Loop through the inputArray in chunks
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    // Extract a chunk of the array with chunkSize
    const chunk = inputArray.slice(i, i + chunkSize);

    // Call the func on the chunk and store the result
    const response = await Promise?.all(
      chunk.map(async (res) => await func(res))
    );
    results = [...results, ...response];
  }

  return results;
}

type retrievedAssetInfoForMultiMint = {
  [assetId: number | string]: {
    [address: string]: {
      count: number;
      eligiblePoints: number;
    };
  };
};

// const getHolders = () => {};

console.log("starting");
// const g = await getAllFormattedHoldersInfo([
//   1227091102, 1221207200, 1215598510, 1203555523,
// ]);

export const handleMultiMint = async (
  address: string,
  projectName: string,
  entry: Project,
  PROJECT_REF: Reference
) => {
  const RETRIEVED_ASSET_INFO =
    entry?.assetInfo as unknown as retrievedAssetInfoForMultiMint;
  let INFO = entry?.info as BigNumber | number;
  const RETRIEVED_ASSETS = entry?.assets;
  const IS_TOKEN = entry?.isToken;
  const VERSION = entry?.version || "v4";
  const NETWORK = entry?.network;
  const IS_MANUAL = entry?.isManual || false;
  const TOKEN = entry?.token;
  const SHOULD_OVERRIDE_FLOOR = entry?.override || false;
  const FLOOR = entry?.floor?.value || 1;
  const DEPOSIT = entry?.dailyRewardAmount!;
  const PERCENT = entry?.percentage?.value || 1;

  const ASSET_INFO_REF = PROJECT_REF?.child("assetInfo");
  const MONITOR_ASSETS_REF = PROJECT_REF?.child("MONITOR");

  const reach = loadStdlib("ALGO");
  reach.setProviderByName(NETWORK);
  const WALLET: wallet = await reach.newAccountFromMnemonic(
    process?.env?.MNEMONIC || ""
  );
  const _assets = await getAllFormattedHoldersInfo(RETRIEVED_ASSETS);

  const main_assets = _assets
    .flatMap((res) => res)
    .reduce((prev, next) => {
      return {
        ...prev,
        [next.assetId]: {
          ...((prev?.[
            next?.assetId
          ] as retrievedAssetInfoForMultiMint["address"]) || {}),
          [next.address]: {
            count: next.amount,
            eligiblePoints: 0,
          },
        },
      };
    }, {} as retrievedAssetInfoForMultiMint);
  if (!RETRIEVED_ASSET_INFO) {
    await ASSET_INFO_REF?.set(main_assets);
    return;
  }
  for (let asset in main_assets) {
    const _databaseAsset = RETRIEVED_ASSET_INFO?.[asset];
    const _chainAsset = main_assets[asset];
    for (let chainAddress in _chainAsset) {
      const dbObj = _databaseAsset?.[chainAddress];
      const chainObj = _chainAsset[chainAddress];
      if (!dbObj) {
        await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`).update({
          ...chainObj,
        });
        continue;
      }
      const optedIn = await hasOpted(
        WALLET,
        chainAddress,
        reach.bigNumberToNumber(INFO as BigNumber),
        !!IS_TOKEN,
        VERSION
      );
      if (optedIn) {
        await Promise.all([
          MONITOR_ASSETS_REF?.update({
            [address!]: { projectName },
          }),
          MONITOR_ASSETS_REF?.child(`${address}/assets`).update({
            [asset]: asset,
          }),
        ]);
      }

      if (dbObj?.eligiblePoints + 1 >= HOUR_LIMIT) {
        if (optedIn) {
          let amount = 0;

          // ! Todo Remove check for token alone and incorporate all checks
          let FLOOR_PRICE = 0;

          if (!IS_MANUAL) {
            if (SHOULD_OVERRIDE_FLOOR) {
              FLOOR_PRICE = FLOOR;
            } else {
              FLOOR_PRICE = (await getFloor(projectName!)) || 0;
            }
            amount = ((FLOOR_PRICE || FLOOR) * (PERCENT / 100)) / 365;
          } else {
            FLOOR_PRICE = DEPOSIT || (FLOOR * (PERCENT / 100)) / 365;
            amount = FLOOR_PRICE;
          }
          let amt = 0;

          if (IS_TOKEN) {
            const tokemMetadata = await WALLET.tokenMetadata(TOKEN?.value);
            amt = reach.bigNumberToNumber(
              reach.parseCurrency(
                amount,
                // @ts-ignore
                +reach.bigNumberToNumber(tokemMetadata?.decimals)
              )
            );
            // console.log({ amt, metadata: tokemMetadata });
          } else {
            amt = reach.bigNumberToNumber(reach.parseCurrency(amount));
          }
          await setReward(
            WALLET,
            chainAddress,
            +asset!,
            amt * (chainObj?.count || 0),
            INFO as unknown as number,
            IS_TOKEN!,
            VERSION
          );
        }
        return await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`).update({
          eligiblePoints: 0,
        });
      }
      console.log("Adding one", dbObj);

      await ASSET_INFO_REF?.child(`${asset}/${chainAddress}`).update({
        ...chainObj,
        eligiblePoints: dbObj?.eligiblePoints + 1,
      });
    }
  }
  return main_assets;
};

// const g = await handleMultiMint();
// console.log({
//   g: JSON.stringify(g, null, 2),
// });
// console.log("ending");
