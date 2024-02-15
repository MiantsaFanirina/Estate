import React, { useState } from 'react'

// components
import FilterBar from '../components/FilterBar'

// services
import { getProducts } from '../services/product.service'
import { useProductContext } from '../context/ProductContext'

const Filter = () => {
    const { products, setProducts } = useProductContext()
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState(0)

    const setSearchTermAndCategory = async (searchTerm, category) => {
        const res = await getProducts()
        const allProducts = res.data

        let filteredProducts = allProducts

        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.reference.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (category !== 0) {
            filteredProducts = filteredProducts.filter(product => product.category === category)
        }

        setProducts(filteredProducts)
    }

    const handleSearchTermChange = async (e) => {
        const searchTerm = e.target.value.trim()
        setSearchTerm(searchTerm)
        setSearchTermAndCategory(searchTerm, category)
    }

    const handleCategoryChange = async (e) => {
        const category = parseInt(e.target.value)
        setCategory(category)
        setSearchTermAndCategory(searchTerm, category)
    }

    return (
        <FilterBar setSearchTerm={handleSearchTermChange} setCategory={handleCategoryChange} ></FilterBar>
    )
}

export default Filter
