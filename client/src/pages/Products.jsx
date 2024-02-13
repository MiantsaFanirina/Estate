import React, {useState, useEffect} from 'react';
import { getProducts } from '../services/product.service';

// icons
import { IoMdAddCircleOutline } from "react-icons/io";

// components
import AddProductForm from '../components/AddProductForm';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getProducts().then(res => {
              setProducts(res.data);
    }).catch(error => {
      setProducts([]);
    });
  }, [])
  return (
    <div className="h-full">
      <div className="flex h-full">
        <ProductList products={products} setProducts={setProducts}/>
        <div className="w-1/5 h-full ml-2 p-6 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col items-center">
          <button onClick={() => setVisible(!visible)} className="flex justify-center items-center font-bold bg-dark-purple hover:bg-dark-purple/80 transition-all text-white w-full py-2 rounded-lg">
            <IoMdAddCircleOutline className="mr-3 text-2xl"/> Ajouter un produit
          </button>
          <FilterBar></FilterBar>
        </div>
      </div>
      <AddProductForm visible={visible} setVisible={setVisible} setProd={setProducts}/>
    </div>
  );
}

export default Products;