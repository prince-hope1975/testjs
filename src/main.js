import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import { handleOptin } from "./common/utils/contract/helpers.js";
dotenv.config();
const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
console.log({ address: WALLET.networkAccount.addr });
console.log(await WALLET.appOptedIn(381449561));
handleOptin(WALLET, {
    _hex: "0x08b06898",
    _isBigNumber: true,
}).then((res) => console.log(res));
