import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import {FaSearch} from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md flex justify-between items-center p-4 px-20">
        <h1 className="font-nycd font-bold text-sm sm:text-3xl"><NavLink to="/">Estate</NavLink></h1>
        <form className="bg-slate-50 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none w-24 sm:w-64"/>
            <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
            <li className="NavLink hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="NavLink hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="NavLink hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                <NavLink to="/sign-in">Sign in</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header