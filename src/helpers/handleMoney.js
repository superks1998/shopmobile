export const handleMoney = (number) => {
    if (typeof number !== "number") {
        number = parseInt(number);
    }

    const result = `${number.toLocaleString()}₫`;

    return result;
};
