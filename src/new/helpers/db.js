import admin from "firebase-admin";
import _admin from "firebase-admin";
// import { z } from "zod";
// import s from "../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json";
// import { ref, set, onValue, get, child } from "firebase/database";
// Fetch the service account key JSON file contents
import serviceAccount from "../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json" assert { type: "json" };
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
try {
    _admin.initializeApp({
        databaseURL: "http://localhost:8080",
    });
}
catch (error) {
    _admin.app();
}
// As an admin, the app has access to read and write all data, regardless of Security Rules
export const db = admin.database();
export const fireDb = admin.firestore();
export const _fireDb = admin.firestore();
export const firestore_pool = admin.firestore().collection("/reward-pool");
export const _firestore_pool = admin.firestore().collection("/reward-pool");
export const firestore_raffles = admin.firestore().collection("/raffles");
