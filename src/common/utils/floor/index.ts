 const getFloor = async (address: string) => {
  const floor = await fetch(
    `https://algogems.io/api/nftexplorer/5dhabkmhotbvzivoi1inzescg/listings_creator\?address\=${address}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res: { metadata: queryTypes[] }) => {
      console.log({ res });
      res.metadata.sort((a, b) => {
        return a?.price - b?.price;
      });
      return res.metadata[0]?.price;
    })
    .catch((err) => {
      console.error(err);
      return;
    });

  return floor;
};


export interface queryTypes {
  assetId: number;
  sellerAddress: string;
  creatorRoyalty: number;
  timestamp: number;
  price: number;
  version: string;
}

export default getFloor