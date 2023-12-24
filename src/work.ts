// import { db, readDataFromSnapShot } from "./common/utils/backend/firebase";

import { wallet } from "./common/utils/airdrop/type";
import { loadStdlib } from "@reach-sh/stdlib";
import * as dotenv from "dotenv";

// const ALL_COLLECTIONS_REF = db.ref("/allCollections");
// console.log("first")
// const RETRIEVED_COLLECTION: { collection_name: string; wallet: string }[] =
//   await readDataFromSnapShot(ALL_COLLECTIONS_REF);
// const newCollection = RETRIEVED_COLLECTION.slice(3);
// await ALL_COLLECTIONS_REF.set(newCollection);
// console.log({ newCollection });
// process.exit()

export const reach = loadStdlib("ALGO");
reach.setProviderByName("MainNet");
dotenv.config();

console.log("Before wallet");
const WALLET: wallet = await reach.newAccountFromMnemonic(
  process?.env?.MNEMONIC || ""
);
console.log("After wallet");
console.log({ WALLET: WALLET?.networkAccount?.addr });
