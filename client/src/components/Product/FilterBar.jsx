import React from 'react'
// icons
import { FaSearch } from "react-icons/fa"
const FilterBar = ({
    setSearchTerm,
    setCategory
}) => {


    return (
        <>  
            {/* searchbar */}
            <div className="relative flex items-center mt-6 bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 pr-10">
                <input type="text" name="search" onChange={setSearchTerm} id="search" className="appearance-none bg-transparent block w-full border leading-tight focus:outline-none" placeholder="Rechercher..." />
                <FaSearch className="absolute right-4"/>
            </div>  
            <div className="mt-10 w-full">
                <label  id="category" name="category" className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="category">Catégorie</label>
                <select defaultValue={0}  onChange={setCategory} className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="0">toutes les catégories</option> 
                    <option value="1">Plomberie</option>
                    <option value="2">Bâtiment</option>
                    <option value="3">Electricité</option>
                </select>
            </div>
        </>
    )
}

export default FilterBar