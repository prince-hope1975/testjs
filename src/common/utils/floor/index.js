const getFloor = async (collection) => {
    const floor = await axios.get(`https://3buxapi.com/floor-price/${collection}`);
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
export default getFloor;
