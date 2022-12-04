import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import {  totalAmountClaimed, } from "./common/utils/contract/helpers.js";

dotenv.config();

const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");

const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
console.log({ address: WALLET.networkAccount.addr });
    console.log(await WALLET.appOptedIn(381449561));

totalAmountClaimed(WALLET, {
  _hex: "0x08b06898",
  _isBigNumber: true,
}).then((res) => console.log({res}));

// reach.balanceOf();
// console.log(
//   reach.bigNumberToNumber({
//     _hex: "0x08b06898",
//     _isBigNumber: true,
//   })
// );

