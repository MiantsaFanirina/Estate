import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog'
import { useProductContext } from '../../context/ProductContext'
import { getProducts, createProduct } from '../../services/product.service'

const AddProductForm = ({visible, setVisible}) => {

    const {products, setProducts} = useProductContext()

    const [err, setErr] = useState(null)

    // state for the form
    const [Prod, setProd] = useState({
        name: '',
        price: 0,
        sellPrice: 0,
        reference: "",
        amount: 1,
        category: 1,
        unit: 'Pièces'
    })  
    const handleChange = (e) => {
        setProd({
            ...Prod,
            [e.target.name]: e.target.value
        })
    }

    const addProduct = async (e) => {
        const {name, price, sellPrice, reference, amount, category, unit} = Prod
        e.preventDefault()

        if(parseInt(sellPrice) <= parseFloat(price)) {
            setErr(<p className="mt-6 text-white bg-red-400 rounded-md shadow-md px-3 py-1 text-center">Le prix de vente ne devrait pas être inferieur ou égale au prix</p>)
        }
        else if(parseFloat(sellPrice) <= 0 || parseFloat(price) <= 0) 
        {
            setErr(<p className="mt-6 text-white bg-red-400 rounded-md shadow-md px-3 py-1 text-center">Un prix ne doit pas être négatif ou égale à 0</p>)
        }
        else {
            setErr(null)
            await createProduct({
                name, 
                price: parseFloat(price), 
                sellPrice: parseFloat(sellPrice), 
                reference,
                amount: parseFloat(amount),
                category: parseFloat(category),
                unit
            })
            const res = await getProducts()
            setProducts(res.data)
            setVisible(!visible)
            setProd({
                name: '',
                price: 0,
                sellPrice: 0,
                reference: "",
                amount: 1,
                category: 1,
                unit: 'Pièces'
            })
        }
    }

    return (
        <Dialog 
            header={
                <h3>Ajouter un produit</h3>
            } 
            footer={
                <div className="mt-3">
                    <button onClick={addProduct} className="bg-dark-purple text-white px-6 py-1 rounded-md shadow text-md">Ajouter</button>
                </div>
            } 
            visible={visible} 
            onHide={() => setVisible(false)}
            className="AddProductDialog"
        >
            
            <form className="flex flex-col">
                <div>
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="name">Nom du produit</label>
                    <input type="text" name="name" onChange={handleChange} value={Prod.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" />
                </div>
                <div className="mt-3">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="reference">Référence</label>
                    <input type="text" name="reference" onChange={handleChange} value={Prod.reference} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="reference" />
                </div>
                <div className="flex justify-around mt-3">
                    <div className="w-1/2">
                        <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="price">Prix d'achat unitaire (MGA)</label>
                        <input type="number" min={1} name="price" onChange={handleChange} value={Prod.price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="price" />
                    </div>
                    <div className="w-1/2 ml-6">
                        <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="sellPrice">Prix de vente unitaire (MGA)</label>
                        <input type="number" min={1} name="sellPrice" onChange={handleChange} value={Prod.sellPrice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="sellPrice" />
                    </div>
                </div>
                <div className="mt-3 flex justify-around">
                    <div className="w-1/2">
                        <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="amount">Quantité</label>
                        <input type="number" min={1} name="amount" onChange={handleChange} value={Prod.amount} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="amount" />
                    </div>
                    <div className="w-1/2 ml-6">
                        <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="unit">Unité</label>
                        <select name="unit" onChange={handleChange} value={Prod.unit} className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="">
                            <option value="Pièces">Pieces</option>
                            <option value="Kg">Kg</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 w-full">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="category">Catégorie</label>
                    <select className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="category" name="category" onChange={handleChange} value={Prod.category}>
                        <option value="1">Plomberie</option>
                        <option value="2">Bâtiment</option>
                        <option value="3">Electricité</option>
                    </select>
                </div>
                {err}
            </form>

        </Dialog>
    )
}

export default AddProductForm