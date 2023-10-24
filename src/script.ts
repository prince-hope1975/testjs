// import serviceAccount from "../../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json";
import admin from "firebase-admin";
import serviceAccount from "./staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json" assert { type: "json" };

// import { ref, set, onValue, get, child } from "firebase/database";

// Fetch the service account key JSON file contents

// Initialize the app with a service account, granting admin privileges

try {
  admin.initializeApp({
    // credential: applicationDefault(),
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    databaseURL: "https://staking-f1d33-default-rtdb.firebaseio.com/",
  });
} catch (error) {
  admin.app();
}
const database = admin.database().ref("admins");
// export const firestore_rewards = admin.firestore().collection("/rewards");
// const data = await firestore_rewards.get();

// const _data = await data.docs.forEach((dat) => {
//     firestore_rewards.
//   console.log({ dat:dat.data() });
// });
// for (const iterator of data.docs) {
//     await firestore_rewards.doc(iterator.id).update({
//         version:"v3"
//     })
//     console.log("done ",iterator.id)
// }
const db = await database.get();
const d = db.val();

for (let [key, values] of Object.entries(d)) {
  for (let [_key, _values] of Object.entries(values as object)) {
    const dbVal = await database.child(`${key}/${_key}`).get();
    // console.log({ dbVal:dbVal.val() });
    console.log({ key, _key });
    // const dbVal = await database.child(`${key}/${_key}`).update({
    //   version:"v3"
    // });
  }
}
process.exit(0);
