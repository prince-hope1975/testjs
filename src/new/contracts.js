// !update with new contract
import { reach } from "../index.js";
// @ts-ignore
import * as index from "./build/index.main.mjs";
const versionManager = {
    v1: index,
};
export const deploy = async (acc) => {
    const ctc = acc.contract(versionManager["v1"]);
    const info = await reach.withDisconnect(() => ctc.p.Deployer({
        alert: (val) => console.log({ val }),
        notify: reach.disconnect,
    }));
    return reach.bigNumberToNumber(info);
};
export const handleOptin_v2 = async (acc, ctcInfo) => {
    const ctcUsers = acc.contract(versionManager["v1"], ctcInfo);
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    return;
};
export const hasOpted_V2 = async (acc, ctcInfo, wallet) => {
    const ctcUsers = acc.contract(versionManager["v1"], ctcInfo);
    return await ctcUsers.unsafeViews.Info.opted(wallet || acc);
};
