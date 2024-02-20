import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import { FaSearch } from "react-icons/fa"
import { Dialog } from 'primereact/dialog'
import AddOrderProductList from './AddOrderProductList'
import AddedProductList from './AddedProductList'
import formatNumber from '../utils/formatNumber'
// Function to calculate total price
const calculateTotalPrice = (prods) => {
    let totalPrice = 0
    prods.forEach(product => {
        totalPrice += product.sellPrice * (product.quantity || 1)
    })
    return totalPrice
}

const AddProductToOrderForm = ({ visible, setVisible }) => {
    const { products, setProducts } = useProductContext()
    const [addedProducts, setAddedProducts] = useState([])
    const [duplicatedProducts, setDuplicatedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const filteredProducts = products.filter(product => product.amount > 0)
        setDuplicatedProducts(filteredProducts)
    }, [products])

    useEffect(() => {
        if (!visible) {
            const filteredProducts = products.filter(product => product.amount > 0)
            const updatedDuplicatedProducts = filteredProducts.filter(product => !addedProducts.some(addedProduct => addedProduct.id === product.id))
            setDuplicatedProducts(updatedDuplicatedProducts)
        }
    }, [visible, products, addedProducts])

    useEffect(() => {
        const total = calculateTotalPrice(addedProducts)
        setTotalPrice(total)
    }, [addedProducts])

    const handleAddProduct = (product) => {
        const productWithDefaultQuantity = { ...product, quantity: 1 };
        setAddedProducts(prevState => [...prevState, productWithDefaultQuantity]);
        setDuplicatedProducts(prevState => prevState.filter(p => p.id !== product.id));
    }

    const onUpdateQuantity = (productId, quantity) => {
        const updatedProducts = addedProducts.map(product =>
            product.id === productId ? { ...product, quantity } : product
        );
        setAddedProducts(updatedProducts);
    };

    const handleRemoveProduct = (productId) => {
        const updatedAddedProducts = addedProducts.filter(product => product.id !== productId);
        setAddedProducts(updatedAddedProducts);
        const removedProduct = products.find(product => product.id === productId);
        if (removedProduct) {
            setDuplicatedProducts(prevState => [...prevState, removedProduct]);
        }
    };

    return (
        <Dialog
            header={<h3>Ajouter un produit à une commande</h3>}
            footer={
                <div className="mt-3 w-full flex justify-center">
                    <button className="min-w-[400px] bg-dark-purple text-white px-6 py-1 rounded-md shadow text-md">Ajouter</button>
                </div>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            className="AddOrdersDialog max-w-[1440px]"
        >
            <form className="flex flex-col items-center w-full">
                <div className="flex w-full items-center">
                    <div className=" w-1/2 relative flex items-center mt-6 bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 pr-10">
                        <input type="text" name="search" id="search" className="appearance-none bg-transparent block w-full border leading-tight focus:outline-none" placeholder="Rechercher..." />
                        <FaSearch className="absolute right-4" />
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center font-bold text-lg">
                        Produit(s) ajouté(s)
                    </div>
                </div>

                <div className="flex">
                    <div className='w-1/2 min-h-[400px] max-h-[400px] border bg-white mt-3 mb-10 overflow-y-scroll p-3'>
                        <AddOrderProductList products={duplicatedProducts} onAddProduct={handleAddProduct} />
                    </div>
                    <div className="w-1/2 ml-6 min-h-[400px] max-h-[400px] border bg-white mt-3 mb-6 overflow-y-scroll p-3">
                        <AddedProductList products={addedProducts} onUpdateQuantity={onUpdateQuantity} onRemoveProduct={handleRemoveProduct} />
                    </div>
                </div>

                <div>Prix total : <span className="font-bold">{formatNumber(totalPrice)} MGA</span></div>

                <button onClick={() => setVisible(!visible)} className="flex justify-center items-center font-bold bg-dark-purple hover:bg-dark-purple/80 transition-all text-white w-fit px-3 py-2 rounded-lg mt-6">
                    Confirmer
                </button>
            </form>

        </Dialog>
    )
}

export default AddProductToOrderForm