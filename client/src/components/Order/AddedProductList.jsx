import React, { useState, useEffect } from 'react'
import formatNumber from '../../utils/formatNumber'
import { IoCloseSharp } from "react-icons/io5"

const AddedProductList = ({ products, onUpdateQuantity, onRemoveProduct }) => {
    const [quantities, setQuantities] = useState({})

    const handleQuantityChange = (productId, quantity) => {
        setQuantities(prevState => ({
            ...prevState,
            [productId]: quantity
        }))
        onUpdateQuantity(productId, quantity)
    }

    const handleRemoveProduct = (productId) => {
        onRemoveProduct(productId)
    }

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="w-full border rounded-lg p-3 mb-3 border-gray-300 flex justify-between items-center hover:bg-gray-100 transition-all">
                    <div className="flex w-1/2">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="ml-3">(Ref: <span className="font-bold text-red-900">{product.reference}</span>)</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <h3 className="font-bold">Qte:</h3>
                            <div className="ml-2 p-2 border rounded-lg flex items-center">
                                <input 
                                    type="number" 
                                    className="outline-none bg-transparent w-[45px]" 
                                    max={product.amount} 
                                    min={1} 
                                    value={quantities[product.id] || 1}
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                />
                                <span className="ml-2 font-bold">/ {product.amount}</span>
                            </div>
                            <p className="ml-2">({product.unit})</p>
                        </div>
                        <span className="mt-3 font-bold">{formatNumber(product.sellPrice * (quantities[product.id] || 1))} MGA</span>
                    </div>
                
                    <IoCloseSharp className="ml-2 cursor-pointer text-2xl" onClick={() => handleRemoveProduct(product.id)} />
                
                </div>
            ))}
        </>
    )
}

export default AddedProductList