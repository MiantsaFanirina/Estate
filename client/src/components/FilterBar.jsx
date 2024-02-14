import React from 'react'
// icons
import { FaSearch } from "react-icons/fa"
const FilterBar = ({
    setSearchTerm
}) => {


    return (
        <>  
            {/* searchbar */}
            <div className="relative flex items-center mt-6 bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 pr-10">
                <input type="text" name="search" onChange={setSearchTerm} id="search" className="appearance-none bg-transparent block w-full border leading-tight focus:outline-none" placeholder="Rechercher..." />
                <FaSearch className="absolute right-4"/>
            </div>  
        </>
    )
}

export default FilterBar