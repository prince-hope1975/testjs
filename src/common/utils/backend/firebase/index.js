import serviceAccount from "../../../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json" assert { type: "json" };
// import Admin, { firestore, database } from "firebase-admin";
import admin from "firebase-admin";
import { getDatabase } from "firebase-admin/database";
// import { ref, set, onValue, get, child } from "firebase/database";
// Fetch the service account key JSON file contents
// const serviceAccount = require("../../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json");
// Initialize the app with a service account, granting admin privileges
try {
    console.log("initializingApp");
    admin.initializeApp({
        // credential: applicationDefault(),
        // @ts-ignore
        credential: admin.credential.cert(serviceAccount),
        // The database URL depends on the location of the database
        databaseURL: "https://staking-f1d33-default-rtdb.firebaseio.com/",
    });
}
catch (error) {
    console.error("Failed to initialize");
    console.error(error);
    admin.app();
}
// As an admin, the app has access to read and write all data, regardless of Security Rules
export const db = admin.database();
export const dBase = getDatabase();
export async function readDataFromSnapShot(ref) {
    const snapShot = await ref.once("value", function (snapshot) {
        // console.log(snapshot.val());
        return snapshot.val();
    });
    return snapShot.val();
}
export async function readDataFromSnapShots(...ref) {
    const snapShot = ref.map((ref) => {
        return ref.once("value", function (snapshot) {
            return snapshot.val();
        });
    });
    const snaps = await Promise.allSettled(snapShot);
    const res = snaps
        .map((snap) => {
        if (snap.status === "fulfilled") {
            return snap.value.val();
        }
        return null;
    })
        .filter((snap) => snap !== null);
    return res;
}
export const doesSnapshopExist = async (Ref) => {
    const snapShot = await Ref.once("value", (snapshot) => {
        return snapshot.exists();
    });
    return snapShot.exists();
};
export async function writeToDb({ ref, data }) {
    try {
        await ref.set(data);
    }
    catch (error) {
        console.log(error);
    }
}
// q: How to install ts-node globally yarn global add ts-node
