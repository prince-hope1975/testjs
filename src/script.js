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
}
catch (error) {
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
const exists = db.exists();
console.log({ exists });
console.log({ db: db.val() });
// db.val()
process.exit(0);
