const calculateTotalPrice = (prods) => {
    let totalPrice = 0
    prods.forEach(product => {
        totalPrice += product.sellPrice * (product.quantity || 1)
    })
    return totalPrice
}

export default calculateTotalPrice