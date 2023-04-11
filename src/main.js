// import { loadStdlib } from "@reach-sh/stdlib";
// import dotenv from "dotenv";
// dotenv.config();
// const providerEnv = "TestNet";
// const reach = loadStdlib("ALGO");
// reach.setProviderByName(providerEnv);
// reach.setProviderByName("TestNet");
// const WALLET: wallet = await reach.newAccountFromMnemonic(
//   process?.env?.MNEMONIC_ESCROW || ""
// );
// const data = reach.parseCurrency(1);
// console.log({ data, d: reach.bigNumberToNumber(data) });
export const getFloorPrice = async (address = "YYWVXM6ITE2QBD2IOUNMO5DIAILK43ABMBDCE6PHAX3U6GOYO4XPA6JGLQ") => {
    const link = new URL("https://www.randswap.com/v1/listings/creator/" + address);
    link.searchParams.append("token", "algoats_AXvH4zL08HYRqt58gv66ENBDclBnTgcW");
    const floor = await fetch(link, {})
        .then((res) => {
        console.log({ res });
        return res.json();
    })
        .then((res) => {
        res.sort((a, b) => {
            return a?.price - b?.price;
        });
        return res[0]?.price;
    })
        .catch((err) => {
        console.error(err);
        return;
    });
    return floor;
};
await getFloorPrice();
