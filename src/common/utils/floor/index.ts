const getFloor = async (collection: string) => {
  const floor = await axios.get<{ data: number }>(
    `https://3buxapi.com/floor-price/${collection}`
  );

  return floor.data.data;

  // .then((res) => {
  //   return res.json();
  // })
  // .then((res: { metadata: queryTypes[] }) => {
  //   console.log({ res });
  //   res.metadata.sort((a, b) => {
  //     return a?.price - b?.price;
  //   });
  //   return res.metadata[0]?.price;
  // })
  // .catch((err) => {
  //   console.error(err);
  //   return;
  // });

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

export default getFloor;
