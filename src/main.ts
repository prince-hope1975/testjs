import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "./build/algo.main.mjs";

dotenv.config();

const reach = loadStdlib("ALGO");
reach.setProviderByName("TestNet");
// reach.setProviderByName("TestNet");

const WALLET = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");

// const p = await reach.getProvider();

// const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const ctcAlice = WALLET.contract(backend);

try {
      await ctcAlice.p.Alice({
        getInfo: async () => ({
          amt: reach.parseCurrency(1),
          addr: WALLET?.getAddress(),
        }),
        contractInfo: (info: any) => {
          console.log({
            info: reach.bigNumberToNumber(info),
            addr: WALLET?.getAddress(),
          });
          reach.disconnect(info); // causes withDisconnect to immediately return null
        },
        // implement Alice's interact object here
      });
} catch (error) {
  console.error({error})
}

// let asset_id = 390451443;
// // let asset_id = 381449561;
// let address_role = "receiver";
// let address = "NSOE53V7LRTXBDN2364V3QW7OEYMESJZMHKPAHVEYWLJVSU246MTFYRHEA";
// p.indexer
//   .lookupAssetTransactions(asset_id)
//   .address(address)
//   //   .addressRole(address_role)
//   .do()
//   .then((res: any) => console.log({ res: JSON.stringify(res, null, 2) }));

// WALLET.contract()
// console.log({ address: WALLET.networkAccount.addr });
//     console.log(await WALLET.appOptedIn(381449561));

// totalAmountClaimed(WALLET, {
//   _hex: "0x08b06898",
//   _isBigNumber: true,
// }).then((res) => console.log({res}));

// reach.balanceOf();
// console.log(
//   reach.bigNumberToNumber({
//     _hex: "0x08b06898",
//     _isBigNumber: true,
//   })
// );
