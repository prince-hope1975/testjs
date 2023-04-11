// @ts-ignore
import * as _v1_backend from "../build/v1/index.main.mjs";
// @ts-ignore
import * as _v2_backend from "../build/v2/index.main.mjs";
// @ts-ignore
import * as _v2_tokenBackend from "../build/v2/token.main.mjs";
import { loadStdlib,
// ALGO_MyAlgoConnect as MyAlgoConnect,
// ALGO_MakePeraConnect as MakePeraConnect,
// ALGO_MakeAlgoSignerConnect as MakeAlgoSignerConnect,
// ALGO_WalletConnect as WalletConnect,
// ALGO_PeraConnect as peraConnect,
 } from "@reach-sh/stdlib";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
const info = { _hex: "0x08adfb83", _isBigNumber: true };
export const checkEligibility = async (acc, ctcInfo, isToken) => {
    // @ts-ignore
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const eligibility = await ctcUsers.unsafeViews.Info.rewards(acc);
    return parseInt(eligibility);
};
export const hasOptedIn = async (acc, ctcInfo, isToken) => {
    // @ts-ignore
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const eligibility = await ctcUsers.unsafeViews.Info.opted(acc);
    return eligibility;
};
export const contractBalance = async (acc, ctcInfo, isToken) => {
    try {
        let ctcUsers;
        if (isToken == null || isToken == undefined) {
            ctcUsers = acc.contract(_v1_backend, reach.bigNumberToNumber(ctcInfo));
        }
        else {
            ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
        }
        let total = await ctcUsers.unsafeViews.Info.balance();
        // @ts-ignore
        total = reach.formatCurrency(total);
        return total;
    }
    catch (err) {
        console.error(err);
        return 0;
    }
};
export const totalOpted = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
    console.log({ total });
    return total;
};
export const viewUserReward = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.rewards(acc);
    return parseInt(total);
};
export const totalUsersClaim = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
    return total;
};
export const totalAmountClaimed = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo || info));
    const total = await ctcUsers.unsafeViews.Info.totalAmountClaimed();
    return total;
};
export const handleOptin = async (acc, ctcInfo, isToken) => {
    console.log("started optin");
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo || info));
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    console.log("Viewing optin status", hasOpted);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    console.log("done optin");
    return;
};
export const handleClaimAll = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, 
    // @ts-ignore
    reach.bigNumberToNumber(ctcInfo || info));
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    console.log("Viewing optin status", hasOpted);
    const success = await ctcUsers.a.User.claimAll();
    console.log("Done claiming");
    return success;
};
export const handleClaim = async (acc, amount, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo || info));
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    const success = await ctcUsers.a.User.claim(reach.parseCurrency(amount));
    return success;
};
export const AddNewAdmin = async (acc, address, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const success = await ctcUsers.a.Admin.addAdmin(address);
    return success;
};
export const deposit = async (acc, amt, contract, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(contract));
    const currency = reach.parseCurrency(amt);
    const success = await ctcUsers.a.Admin.deposit(currency);
    return success;
};
export const deleteContract = async (acc, contract, isToken) => {
    let ctcUsers;
    if (isToken == null || isToken == undefined) {
        ctcUsers = acc.contract(_v1_backend, contract);
    }
    else {
        ctcUsers = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, contract);
    }
    await ctcUsers.a.Admin.endContractAndTransfer();
};
export const deploy = async (acc, name, token) => {
    const ctc = acc.contract(!!token ? _v2_tokenBackend : _v2_backend);
    const info = await reach.withDisconnect(() => ctc.p.Deployer({
        alert: (val) => console.log({ val }),
        projectName: name,
        notify: reach.disconnect,
        tok: token,
    }));
    console.log({ info });
    return info;
};
export const setReward = async (acc, address, amt, ctcInfo, isToken) => {
    const ctcAdmin = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcAdmin.a.User.optin();
    const result = await ctcAdmin.a.Admin.setReward(reach.formatAddress(address), reach.parseCurrency(amt));
    return result;
};
export const editUserReward = async (acc, address, amt, ctcInfo = info, isToken) => {
    const ctcAdmin = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
    const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcAdmin.a.User.optin();
    const result = await ctcAdmin.a.Admin.editUserReward(reach.formatAddress(address), reach.parseCurrency(amt));
    return result;
};
export const hasOpted = async (acc, address, ctcInfo, isToken) => {
    try {
        // @ts-ignore
        const ctcAdmin = acc.contract(isToken ? _v2_tokenBackend : _v2_backend, reach.bigNumberToNumber(ctcInfo));
        const hasOpted = await ctcAdmin.unsafeViews.Info.opted(address);
        return hasOpted;
    }
    catch (error) {
        console.error("An error occured", error);
        return error;
    }
};
