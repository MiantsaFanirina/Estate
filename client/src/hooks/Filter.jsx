import React from 'react'

// components
import FilterBar from '../components/FilterBar'

// services
import { getProducts } from '../services/product.service'
import { useProductContext } from '../context/ProductContext'

const Filter = () => {

    const {products, setProducts} = useProductContext()
    console.log(products)

    const setSearchTerm = async (e) => {
        const searchTerm = e.target.value
        
        const res = await getProducts()
        setProducts(res.data)

        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

        if(filteredProducts.length === 0)
        {
            filteredProducts = products.filter(product => product.reference.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        setProducts(filteredProducts)

        if(searchTerm === "") {
            const res = await getProducts()
            setProducts(res.data)
        }
    }
        
    return (
        <FilterBar setSearchTerm={setSearchTerm}></FilterBar>
    )
}

export default Filter