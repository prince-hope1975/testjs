import admin from "firebase-admin";
// import serviceAccount from "../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json" assert { type: "json" };
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
admin.initializeApp();
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "http://localhost:8080", // Use the Firestore emulator host and port
// });
const db = admin.firestore();
try {
    const val = await db.collection("rewards-pool").get();
    console.log({ db: val.docs.map(res => res.data()) });
}
catch (error) {
    console.error("Error accessing Firestore:", error);
}
