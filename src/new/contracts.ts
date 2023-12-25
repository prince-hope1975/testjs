
// !update with new contract
import { reach } from "../index.js";
import { wallet } from "../common/utils/airdrop/type.js";
import { BigNumber } from "../BigNumber.js";
// @ts-ignore
import * as index from "./build/index.main.mjs";

const versionManager = {
  v1: index,
};
export const deploy = async (acc: wallet) => {
  const ctc = acc.contract(versionManager["v1"]);
  const info = await reach.withDisconnect(() =>
    ctc.p.Deployer({
      alert: (val: number) => console.log({ val }),
      notify: reach.disconnect,
    })
  );
  return reach.bigNumberToNumber(info as BigNumber);
};

export const handleOptin_v2 = async (acc: wallet, ctcInfo: number) => {
  const ctcUsers = acc.contract(versionManager["v1"], ctcInfo);
  const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
  if (!hasOpted) await ctcUsers.a.User.optin();
  return;
};
export const hasOpted_V2 = async (
  acc: wallet,
  ctcInfo: number,
  wallet?: string
): Promise<boolean> => {
  const ctcUsers = acc.contract(versionManager["v1"], ctcInfo);
  return await ctcUsers.unsafeViews.Info.opted(wallet || acc);
};



