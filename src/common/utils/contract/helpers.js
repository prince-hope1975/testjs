// @ts-ignore
import * as _v1_backend from "../build/v1/index.main.mjs";
// @ts-ignore
import * as _v3_backend from "../build/v3/index.main.mjs";
// @ts-ignore
import * as _v3_tokenBackend from "../build/v3/token.main.mjs";
// @ts-ignore
import * as _v4_tokenBackend from "../builds/v4/build/token_v2.main.mjs";
// @ts-ignore
import * as _v4_backend from "../builds/v4/build/index_v2.main.mjs";
const versionManager = {
    v3: { false: _v3_backend, true: _v3_tokenBackend },
    v4: { false: _v4_backend, true: _v4_tokenBackend },
};
import { loadStdlib } from "@reach-sh/stdlib";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
const info = { _hex: "0x08adfb83", _isBigNumber: true };
export const checkEligibility = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const eligibility = await ctcUsers.unsafeViews.Info.totalRewards(acc);
    return parseInt(eligibility);
};
export const hasOptedIn = async (acc, ctcInfo, isToken, version = "v3") => {
    // @ts-ignore
    const ctcUsers = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
    const eligibility = await ctcUsers.unsafeViews.Info.opted(acc);
    return eligibility;
};
export const canSetReward = async (acc, amount, ctcInfo, isToken, version = "v3") => {
    if (version == "v3")
        return true;
    const ctcUsers = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
    const bal = await ctcUsers.unsafeViews.Info.balance(acc);
    const paid = await ctcUsers.unsafeViews.Info.balance(acc);
    if (bal == undefined || paid == undefined) {
        throw Error("Failed to data");
    }
    const result = bal - paid;
    return result >= amount;
};
export const hasOpted = async (acc, address, ctcInfo, isToken, version = "v3") => {
    try {
        const ctcAdmin = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
        const hasOpted = await ctcAdmin.unsafeViews.Info.opted(address);
        return hasOpted;
    }
    catch (error) {
        console.error("An error occured", error);
        return false;
    }
};
export const setReward = async (acc, address, token, amt, ctcInfo, isToken, version = "v3") => {
    const ctcAdmin = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
    // const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
    // console.log({ hasOpted });
    // if (!hasOpted) await ctcAdmin.a.User.optin();
    const result = await ctcAdmin.a.Admin.setReward(reach.formatAddress(address), token, amt);
    console.log({ result });
    return result;
};
export const getPoolBalance = async (acc, ctcInfo, isToken, token, version = "v4") => {
    try {
        let ctcUsers;
        if (isToken == null || isToken == undefined) {
            ctcUsers = acc.contract(_v1_backend, ctcInfo);
        }
        else {
            ctcUsers = acc.contract(versionManager[version][`${!!isToken}`], ctcInfo);
        }
        let total = 0;
        const totalBalance = await ctcUsers.unsafeViews.Info.balance();
        if (version == "v3") {
            total = totalBalance;
        }
        else {
            total =
                totalBalance -
                    ((await ctcUsers.unsafeViews.Info.totalCurrentAllocatoinToAllUsers()) ||
                        0);
            // console.log({
            //   totalBalance,
            //   myBal:
            //     await ctcUsers.unsafeViews.Info.totalCurrentAllocatoinToAllUsers(),
            // });
        }
        // if (!BNTN(total as unknown as BigNumber)) {
        //   total = await ctcUsers.unsafeViews.Info.balance();
        //   console.log("balance", total);
        // }
        if (token) {
            const meta = await acc.tokenMetadata(token);
            total = reach.formatWithDecimals(total, reach.bigNumberToNumber(meta.decimals));
        }
        else {
            // @ts-ignore
            total = reach.formatCurrency(total);
        }
        return total;
    }
    catch (err) {
        console.error(err);
        return 0;
    }
};
export const contractBalance = async (acc, ctcInfo, isToken) => {
    try {
        let ctcUsers;
        if (isToken == null || isToken == undefined) {
            ctcUsers = acc.contract(_v1_backend, ctcInfo);
        }
        else {
            ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
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
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
    console.log({ total });
    return total;
};
export const viewUserReward = async (acc, tok, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const total = await ctcUsers.unsafeViews.Info.userReward(acc, reach.bigNumberify(tok));
    return parseInt(total);
};
export const totalUsersClaim = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
    return total;
};
export const totalAmountClaimed = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo || info);
    const total = await ctcUsers.unsafeViews.Info.totalAmountClaimed();
    return total;
};
export const handleOptin = async (acc, ctcInfo, isToken) => {
    console.log("started optin");
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo || info);
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    console.log("Viewing optin status", hasOpted);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    console.log("done optin");
    return;
};
export const handleClaimAll = async (acc, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo || info);
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    console.log("Viewing optin status", hasOpted);
    const success = await ctcUsers.a.User.claimAll();
    console.log("Done claiming");
    return success;
};
export const handleClaim = async (acc, amount, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo || info);
    const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcUsers.a.User.optin();
    const success = await ctcUsers.a.User.claim(reach.parseCurrency(amount));
    return success;
};
export const AddNewAdmin = async (acc, address, ctcInfo, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const success = await ctcUsers.a.Admin.addAdmin(address);
    return success;
};
export const deposit = async (acc, amt, contract, isToken) => {
    const ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, contract);
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
        ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, contract);
    }
    await ctcUsers.a.Admin.endContractAndTransfer();
};
export const deploy = async (acc, name, token) => {
    const ctc = acc.contract(!!token ? _v3_tokenBackend : _v3_backend);
    const info = await reach.withDisconnect(() => ctc.p.Deployer({
        alert: (val) => console.log({ val }),
        projectName: name,
        notify: reach.disconnect,
        tok: token,
    }));
    console.log({ info });
    return info;
};
export const editUserReward = async (acc, address, amt, ctcInfo = info, isToken) => {
    const ctcAdmin = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, ctcInfo);
    const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
    if (!hasOpted)
        await ctcAdmin.a.User.optin();
    const result = await ctcAdmin.a.Admin.editUserReward(reach.formatAddress(address), reach.parseCurrency(amt));
    return result;
};
