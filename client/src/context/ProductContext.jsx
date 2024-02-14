import { useContext, useState, useEffect } from 'react'
import {createContext} from 'react'
import { getProducts } from '../services/product.service'

export const ProductContext = createContext({})

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(res => {
                  setProducts(res.data);
        }).catch(error => {
          setProducts([]);
        });
    }, [])

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
    
}


export const useProductContext = () => {
    const products = useContext(ProductContext)
    if (products === undefined) {
        throw new Error('useProductContext must be used within a ProductContextProvider')
    }
    return products
}