// @ts-ignore
import * as backend from "../build/index.main.mjs";
import { loadStdlib,
// ALGO_MyAlgoConnect as MyAlgoConnect,
// ALGO_MakePeraConnect as MakePeraConnect,
// ALGO_MakeAlgoSignerConnect as MakeAlgoSignerConnect,
// ALGO_WalletConnect as WalletConnect,
// ALGO_PeraConnect as peraConnect,
 } from "@reach-sh/stdlib";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
// reach.providerEnvByName("TestNet");
const info = { _hex: "0x08adfb83", _isBigNumber: true };
export const checkEligibility = async (acc, ctcInfo = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const eligibility = await ctcUsers.unsafeViews.Info.rewards(acc);
    return parseInt(eligibility);
};
export const hasOptedIn = async (acc) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const eligibility = await ctcUsers.unsafeViews.Info.opted(acc);
    return eligibility;
};
export const totalOpted = async (acc, ctcInfo = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn(acc);
    return total;
    ctcInfo;
};
export const viewUserReward = async (acc, ctcInfo = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.rewards(acc);
    return parseInt(total);
};
export const totalUsersClaim = async (acc, ctcInfo = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn(acc);
    return total;
};
export const totalAmountClaimed = async (acc, ctcInfo = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.totalAmountClaimed();
    return total;
};
export const handleOptin = async (acc, ctcInfo) => {
    const ctcUsers = acc.contract(backend, 
    // @ts-ignore
    reach.bigNumberToNumber(ctcInfo || info));
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    console.log("Viewing optin status", hasOpted);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    console.log("done optin");
    return;
};
export const handleClaim = async (acc) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    const success = await ctcUsers.a.User.claim();
    return success;
};
export const AddNewAdmin = async (acc, address) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    // const hasOpted = await ctcUsers.unsafeViews.Info.opted(address);
    // if (!hasOpted) await ctcUsers.a.User.optin();
    const success = await ctcUsers.a.Admin.addAdmin(address);
    return success;
};
export const deposit = async (acc, amt, contract = info) => {
    // @ts-ignore
    const ctcUsers = acc.contract(backend, reach.bigNumberToNumber(contract));
    // const hasOpted = await ctcUsers.unsafeViews.Info.opted(address);
    // if (!hasOpted) await ctcUsers.a.User.optin();
    const success = await ctcUsers.a.Admin.deposit(reach.parseCurrency(amt));
    return success;
};
export const deploy = async (acc, name) => {
    // @ts-ignore
    const ctc = acc.contract(backend);
    // const hasOpted = await ctcUsers.unsafeViews.Info.opted(address);
    // if (!hasOpted) await ctcUsers.a.User.optin();
    const info = await reach.withDisconnect(() => ctc.p.Deployer({
        alert: (val) => console.log({ val }),
        projectName: name,
        notify: reach.disconnect,
    }));
    console.log({ info });
    return info;
};
export const setReward = async (acc, address, amt, ctcInfo) => {
    try {
        // @ts-ignore
        const ctcAdmin = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
        const hasOpted = await ctcAdmin.unsafeViews.Info.opted(address);
        if (!hasOpted)
            await ctcAdmin.a.User.optin();
        const result = await ctcAdmin.a.Admin.setReward(reach.formatAddress(address), reach.parseCurrency(amt));
        return result;
    }
    catch (error) {
        console.error("An error occured", error);
    }
};
export const editUserReward = async (acc, address, amt, ctcInfo = info) => {
    // @ts-ignore
    const ctcAdmin = acc.contract(backend, reach.bigNumberToNumber(ctcInfo));
    const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcAdmin.a.User.optin();
    const result = await ctcAdmin.a.Admin.editUserReward(reach.formatAddress(address), reach.parseCurrency(amt));
    return result;
};
