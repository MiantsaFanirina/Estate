import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Gestion de stock
          </h1>
        </div>
        <ul className="NavLink pt-6">
          
            <NavLink to="/">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}>
                    <IoIcons.IoIosPaper className="text-2xl"/>   
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Mes Produits
                    </span>
                </li>
            </NavLink>

            <NavLink to="/orders">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2 `}>
                    <FaIcons.FaCartPlus className="text-2xl" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Mes commandes
                    </span>
                </li>
            </NavLink>

            <NavLink to="/balance">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-8 `}>
                    <FaIcons.FaMoneyBillAlt className="text-2xl" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Mon balance
                    </span>
                </li>
            </NavLink>

            <NavLink to="/benefits">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}>
                    <FaIcons.FaHandHoldingUsd className="text-2xl" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Mes benefices
                    </span>
                </li>
            </NavLink>

            <NavLink to="/history">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}>
                    <FaIcons.FaHistory className="text-2xl" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Historique
                    </span>
                </li>
            </NavLink>

            <NavLink to="/logout">
                <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-8`}>
                    <FaIcons.FaPowerOff className="text-2xl" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Deconnexion
                    </span>
                </li>
            </NavLink>

        </ul>
      </div>
  );
};
export default SideBar;