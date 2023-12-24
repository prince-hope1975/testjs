// import { z } from "zod";
import { ZOD_PROJECT } from "../zod.js";
import { firestore_pool } from "./db.js";

// export const getPoolBalance = async (id: string) => {
//   z.string().parse(id);
//   //   const d = await firestore_pool.select("");
// };

// const bal = await getPoolBalance("5bXxK6D918mW0eYHZj1K");
// const b = await firestore_pool.doc("5bXxK6D918mW0eYHZj1K").get();
//   .select("winner")
//   .where(
//     "Admin",
//     "==",
//     "CLCTSE3TECTIXLRA2M6DIMHHZTEO32KWLPBAJKOHUU3LHFIGDZKO7RT7J4"
//   )
//   .get();

const p = ZOD_PROJECT.parse({
  project: "SampleProject",
  admin: "YIAZAYLN73TRG5AKSCQR7E6JMMAMJHJJIWJEGUAJLPMRSZZVQR246Q6RPE",
  //   assetInfo: {
  //     1176106400: {
  //       address: "YIAZAYLN73TRG5AKSCQR7E6JMMAMJHJJIWJEGUAJLPMRSZZVQR246Q6RPE",
  //       assetId: "1176106400",
  //       eligiblePoints: 10,
  //     },
  //   },
  assets: [1176106400],
  active: true,
  hide: false,
  poolType: "mono-mint",
  network: "mainnet",
  percent: 80,
  poolBalance: 1000,
  paymentActivated: true,
  type: "token",
  token: 123,
  rewardType: "manual",
  dailyReward: 50,
});

await firestore_pool.add(p);

process.exit();
