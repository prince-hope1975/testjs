// @ts-ignore
import { version, wallet } from "../airdrop/type.js";
// @ts-ignore
import * as _v1_backend from "../build/v1/index.main.mjs";
// @ts-ignore
import * as _v2_backend from "../build/v2/index.main.mjs";
// @ts-ignore
import * as _v3_backend from "../build/v3/index.main.mjs";
// @ts-ignore
import * as _v2_tokenBackend from "../build/v2/token.main.mjs";
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
type BigNumber = ReturnType<typeof reach.bigNumberToNumber>;
const info = { _hex: "0x08adfb83", _isBigNumber: true } as unknown as BigNumber;
export const checkEligibility = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const eligibility = await ctcUsers.unsafeViews.Info.totalRewards(acc);
  return parseInt(eligibility);
};

export const hasOptedIn = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean,
  version = "v3" as "v3" | "v4"
) => {
  // @ts-ignore
  const ctcUsers = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
  const eligibility = await ctcUsers.unsafeViews.Info.opted(acc);
  return eligibility;
};
export const canSetReward = async (
  acc: wallet,
  amount: number,
  ctcInfo: BigNumber,
  isToken: boolean,
  version = "v3" as "v3" | "v4"
) => {
  if (version == "v3") return true;
  const ctcUsers = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
  const bal: number | undefined = await ctcUsers.unsafeViews.Info.balance(acc);
  const paid: number | undefined = await ctcUsers.unsafeViews.Info.balance(acc);
  if (bal == undefined || paid == undefined) {
    throw Error("Failed to data");
  }
  const result = bal - paid;
  return result >= amount;
};
export const hasOpted = async (
  acc: any,
  address: string,
  ctcInfo: BigNumber,
  isToken: boolean,
  version = "v3" as "v3" | "v4"
) => {
  try {
    const ctcAdmin = acc.contract(
      versionManager[version][`${isToken}`],
      ctcInfo
    );

    const hasOpted = await ctcAdmin.unsafeViews.Info.opted(address);
    return hasOpted;
  } catch (error) {
    console.error("An error occured", error);
    return false;
  }
};
export const setReward = async (
  acc: wallet,
  address: string,
  token: BigNumber,
  amt: number,
  ctcInfo: BigNumber,
  isToken: boolean,
  version = "v3" as "v3" | "v4"
) => {
  const ctcAdmin = acc.contract(versionManager[version][`${isToken}`], ctcInfo);
  // const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
  // console.log({ hasOpted });
  // if (!hasOpted) await ctcAdmin.a.User.optin();
  const result = await ctcAdmin.a.Admin.setReward(
    reach.formatAddress(address),
    token,
    amt
  );
  console.log({ result });
  return result;
};
export const getPoolBalance = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken?: boolean,
  token?: BigNumber | number,
  version: version = "v4"
): Promise<number | string> => {
  try {
    let ctcUsers: any;
    if (isToken == null || isToken == undefined) {
      ctcUsers = acc.contract(_v1_backend, ctcInfo);
    } else {
      ctcUsers = acc.contract(versionManager[version][`${!!isToken}`], ctcInfo);
    }
    let total: string | number = 0;
    const totalBalance = await ctcUsers.unsafeViews.Info.balance();
    if (version == "v3") {
      total = totalBalance;
    } else {
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
      total = reach.formatWithDecimals(
        total,
        reach.bigNumberToNumber(meta.decimals!)
      );
    } else {
      // @ts-ignore
      total = reach.formatCurrency(total);
    }

    return total;
  } catch (err) {
    console.error(err);
    return 0;
  }
};
export const contractBalance = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken?: boolean
): Promise<number> => {
  try {
    let ctcUsers: any;
    if (isToken == null || isToken == undefined) {
      ctcUsers = acc.contract(_v1_backend, ctcInfo);
    } else {
      ctcUsers = acc.contract(
        isToken ? _v3_tokenBackend : _v3_backend,
        ctcInfo
      );
    }
    let total = await ctcUsers.unsafeViews.Info.balance();
    // @ts-ignore
    total = reach.formatCurrency(total);
    return total;
  } catch (err) {
    console.error(err);
    return 0;
  }
};
export const totalOpted = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
  console.log({ total });
  return total;
};

export const viewUserReward = async (
  acc: wallet,
  tok: number,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const total: string = await ctcUsers.unsafeViews.Info.userReward(
    acc,
    reach.bigNumberify(tok)
  );
  return parseInt(total);
};

export const totalUsersClaim = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const total = await ctcUsers.unsafeViews.Info.totalOptedIn();
  return total;
};

export const totalAmountClaimed = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo || info
  );
  const total = await ctcUsers.unsafeViews.Info.totalAmountClaimed();
  return total;
};

export const handleOptin = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  console.log("started optin");
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo || info
  );
  const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
  console.log("Viewing optin status", hasOpted);
  if (!hasOpted) await ctcUsers.a.User.optin();
  console.log("done optin");
  return;
};

export const handleClaimAll = async (
  acc: wallet,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo || info
  );
  const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
  if (!hasOpted) await ctcUsers.a.User.optin();
  console.log("Viewing optin status", hasOpted);
  const success = await ctcUsers.a.User.claimAll();
  console.log("Done claiming");

  return success;
};

export const handleClaim = async (
  acc: wallet,
  amount: number,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,

    ctcInfo || info
  );
  const hasOpted = await ctcUsers.unsafeViews.Info.opted(acc);
  if (!hasOpted) await ctcUsers.a.User.optin();
  const success: boolean = await ctcUsers.a.User.claim(
    reach.parseCurrency(amount)
  );
  return success;
};

export const AddNewAdmin = async (
  acc: wallet,
  address: string,
  ctcInfo: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const success = await ctcUsers.a.Admin.addAdmin(address);
  return success;
};

export const deposit = async (
  acc: wallet,
  amt: number,
  contract: BigNumber,
  isToken: boolean
) => {
  const ctcUsers = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    contract
  );

  const currency = reach.parseCurrency(amt);
  const success = await ctcUsers.a.Admin.deposit(currency);
  return success;
};
export const deleteContract = async (
  acc: wallet,
  contract: BigNumber,
  isToken?: boolean
) => {
  let ctcUsers: any;
  if (isToken == null || isToken == undefined) {
    ctcUsers = acc.contract(_v1_backend, contract);
  } else {
    ctcUsers = acc.contract(isToken ? _v3_tokenBackend : _v3_backend, contract);
  }
  await ctcUsers.a.Admin.endContractAndTransfer();
};

export const deploy = async (acc: wallet, name: string, token?: BigNumber) => {
  const ctc = acc.contract(!!token ? _v3_tokenBackend : _v3_backend);
  const info = await reach.withDisconnect(() =>
    ctc.p.Deployer({
      alert: (val: number) => console.log({ val }),
      projectName: name,
      notify: reach.disconnect,
      tok: token,
    })
  );
  console.log({ info });
  return info;
};

export const editUserReward = async (
  acc: wallet,
  address: string,
  amt: number,
  ctcInfo: BigNumber = info as BigNumber,
  isToken: boolean
) => {
  const ctcAdmin = acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    ctcInfo
  );
  const hasOpted = await ctcAdmin.unsafeViews.Info.opted(acc);
  if (!hasOpted) await ctcAdmin.a.User.optin();
  const result = await ctcAdmin.a.Admin.editUserReward(
    reach.formatAddress(address),
    reach.parseCurrency(amt)
  );
  return result;
};
