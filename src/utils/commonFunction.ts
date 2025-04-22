export const formatPrice = (price: number) => {
    const formattedPrice = Number(price)?.toFixed(2);
    return formattedPrice?.endsWith(".00") ? formattedPrice?.slice(0, -3) : formattedPrice;
};
