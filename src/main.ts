import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import { hanldeDrop } from "./common/utils/airdrop/index.js";
import { wallet } from "./common/utils/airdrop/type";
dotenv.config();
const providerEnv = "TestNet";
const tok = "21364625";
const reach = loadStdlib("ALGO");
reach.setProviderByName(providerEnv);
// reach.setProviderByName("TestNet");

const WALLET: wallet = await reach.newAccountFromMnemonic(
  process?.env?.MNEMONIC_ESCROW || ""
);

const data = reach.parseCurrency(1);
console.log({ data, d: reach.bigNumberToNumber(data) });

// const d ={
//   token:"",
//   reciever:"",
//   tokenId:"",
//   type:"token",
//   amount:"1",

// }

// await hanldeDrop(
//   WALLET,
//   {
//     name: "USDC",
//     contract: "token",
//     network: providerEnv,
//     deployer: WALLET.networkAccount.addr,
//     params: {
//       addr: "IAWNDP5OXXP7BD7I7QUMUOF35SM3IZWUW755HHDJK2VK25D7TLJY2UZGUE",
//       // @ts-ignore
//       amt: reach.parseCurrency(1, reach.bigNumberToNumber(metadata.decimals)),
//       tok,
//     },
//   },
//   reach
// );
