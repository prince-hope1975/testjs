import { db } from "../backend/firebase/index.js";
import * as algo from "../builds/build/algo.main.mjs";
import * as token from "../builds/build/token.main.mjs";
const obj = { algo, token };
import { reach as stdlib } from "../contract/helpers.js";
import { wallet } from "./type";

export const hanldeDrop = async (
  wallet: wallet,
  data: apiParams,
  reach: typeof stdlib = stdlib
) => {
  const {
    deployer,
    params = {
      addr: wallet.networkAccount.addr,
      amt: 1,
      tok: "67395862",
    },
    contract: contractType = "algo",
  } = data;

  const ctc = wallet.contract(obj[contractType]);
  const info = await reach.withDisconnect(async () => {
    return await ctc.p.Alice({
      getInfo: async () => params,
      contractInfo: (info: any) => {
        reach.disconnect(reach?.bigNumberToNumber(info)); // causes withDisconnect to immediately return null
      },
      // implement Alice's interact object here
    });
  });
  const CONTRACT_REF = db.ref("airdrops/users").child(`${params.addr}/${info}`);
  const CONTRACT_REF_ADMIN = db
    .ref("airdrops/admin")
    .child(`${deployer}/${info}`);
  // .child(`${info}`);
  const drop: dropParams = {
    contract: data?.contract,
    ctcInfo: info,
    assetId: data?.params?.tok,
    deployer: data?.deployer,
    name: data?.name,
    network: data?.network,
    reciever: data?.params?.addr,
    amount: data?.params?.amt,
  };

  await Promise.all([
    await CONTRACT_REF.set(drop).then((res) =>
      console.log("Done inserting", res)
    ),
    await CONTRACT_REF_ADMIN.set(drop).then((res) =>
      console.log("Done inserting", res)
    ),
  ]);
};

export const BulkDrop = async (
  wallet: wallet,
  data: apiParams[],
  reach: typeof stdlib = stdlib
) => {
  for (const d of data) {
    await hanldeDrop(wallet, d, reach);
  }
};

export type dropParams = {
  contract: "algo" | "token";
  ctcInfo: any;
  deployer: string;
  assetId: string | number | undefined;
  name: string;
  network: string;
  reciever: string;
  claimed?: boolean;
  amount:
    | {
        _hex: string;
        _isBigNumber: true;
      }
    | {
        _hex: string;
        _isBigNumber: true;
      };
};
export type apiParams = {
  deployer: any;
  ctcInfo: any;
  id: string;
  network: string;
  decimals: number;
  params:
    | {
        amt: { _hex: string; _isBigNumber: true };
        addr: string;
        tok?: undefined;
      }
    | {
        amt: { _hex: string; _isBigNumber: true };
        addr: string;
        tok: string;
      };
  contract: "algo" | "token";
  name: string;
};
