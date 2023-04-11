const getFloor = async (address) => {
    const floor = await fetch(`https://algogems.io/api/nftexplorer/5dhabkmhotbvzivoi1inzescg/listings_creator\?address\=${address}`)
        .then((res) => {
        return res.json();
    })
        .then((res) => {
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
export default getFloor;
