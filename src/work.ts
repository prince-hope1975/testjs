import { db, readDataFromSnapShot } from "./common/utils/backend/firebase";

const ALL_COLLECTIONS_REF = db.ref("/allCollections");
console.log("first")
const RETRIEVED_COLLECTION: { collection_name: string; wallet: string }[] =
  await readDataFromSnapShot(ALL_COLLECTIONS_REF);
const newCollection = RETRIEVED_COLLECTION.slice(3);
await ALL_COLLECTIONS_REF.set(newCollection);
console.log({ newCollection });
process.exit()
