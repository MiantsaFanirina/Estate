import React from 'react'

// components
import FilterBar from '../components/FilterBar'

// services
import { getProducts } from '../services/product.service'

const Filter = ({products, setProducts}) => {

    const setSearchTerm = async (e) => {
        const searchTerm = e.target.value
        
        const res = await getProducts()
        setProducts(res.data)

        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
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