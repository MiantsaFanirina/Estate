const formatNumber = (number) => {
    return number.toLocaleString().replace(/,/g, ' ');
};

export default formatNumber