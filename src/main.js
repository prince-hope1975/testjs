import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
dotenv.config();
const reach = loadStdlib("ALGO");
const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
console.log({ address: WALLET.networkAccount.addr });
