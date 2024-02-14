import React, { useState } from 'react'
import { MdEdit, MdDelete } from "react-icons/md"

// services
import { getProducts,deleteProduct } from '../services/product.service'

// component
import EditProductForm from '../components/EditProductForm'

// context
import { useProductContext } from '../context/ProductContext'

const ProductList = () => {

  const {products, setProducts} = useProductContext()


  const [currentProduct, setCurrentProduct] = useState({})
  const [visible, setVisible] = useState(false)
  const editProduct = async (product) => {
    setCurrentProduct(product)
    setVisible(!visible)
  }
  const deleteCurrentProduct = async (id) => {
    await deleteProduct(id)
    const res = await getProducts()
    setProducts(res.data)
  }

  const setCategoryColor = (category) => {
    switch(category) {
      case 1:
        return "bg-yellow-500"
      case 2:
        return "bg-pink-500"
      case 3:
        return "bg-purple-500"
    }
  }

  return (
    <div className="w-4/5 h-full flex flex-col gap-3 bg-gray-200 p-6 overflow-y-scroll">
      
      <div className="w-full py-4 px-6  bg-white flex justify-between mb-10">
        <h1 className="text-xl font-bold tracking-widest">{(products.length === 0) ? "Aucun produit" : `${products.length} produit(s)`}</h1>
        {products.length == 0 ? null : (
        <div className="flex">
          <div className="flex items-center text-sm font-bold tracking-widest"><div className="w-[10px] h-[10px] border bg-yellow-500 ring-1 ring-yellow-600 rounded-full mr-3"></div> Plomberie</div>
          <div className="flex items-center text-sm font-bold tracking-widest ml-6"><div className="w-[10px] h-[10px] border bg-pink-500 ring-1 ring-pink-600 rounded-full mr-3"></div> Batiment</div>
          <div className="flex items-center text-sm font-bold tracking-widest ml-6"><div className="w-[10px] h-[10px] border bg-purple-500 ring-1 ring-purple-600 rounded-full mr-3"></div> Electricité</div>
        </div>)}
      </div>
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md flex p-6 overflow-x-scroll">
          
          <div className="flex items-center gap-2 justify-between w-full">
            
            <h1 className="font-bold max-w-[20%] text-xl flex items-center gap-1 flex-wrap">{product.name} <span className="text-sm font-normal text-gray-700">( {product.reference} )</span></h1>

            <span className="flex items-center justify-center bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-md py-1 px-3 w-auto text-gray-700 shadow-sm mr-2"><span className="font-bold ml-1">{product.amount} {product.unit}</span></span>
            <span className="flex gap-1 flex-wrap items-center"><span className="text-sm font-bold">Prix d'achat: </span><span className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 font-bold px-3 py-1 rounded-md shadow-sm text-gray-700">{product.price} MGA / {product.unit}</span></span>
            <span className="flex gap-1 flex-wrap items-center"><span className="text-sm font-bold">Prix de vente: </span><span className="bg-gradient-to-r from-rose-300/20 to-cyan-600/20 font-bold px-3 py-1 rounded-md shadow-sm text-gray-700">{product.sellPrice} MGA / {product.unit}</span></span>
            
            <span className={"w-[20px] h-[20px] rounded-full " + setCategoryColor(product.category)}></span>

            <span className="text-2xl flex gap-1">
              <button className="border border-dark-purple text-dark-purple p-2 rounded-xl" onClick={async () => await editProduct(product)}><MdEdit /></button>
              <button className="border border-dark-purple bg-dark-purple text-white p-2 rounded-xl" onClick={async () => await deleteCurrentProduct(product.id)}><MdDelete /></button>
            </span>

          </div>
        </div>
      ))}
      <div>
        <EditProductForm visible={visible} setVisible={setVisible} product={currentProduct}/>
      </div>
    </div>
  )
}

export default ProductList