import React, {useState, useContext} from 'react'

// icons
import { IoMdAddCircleOutline } from "react-icons/io"
import { ImCheckboxChecked } from "react-icons/im"
import { FaClock } from "react-icons/fa"
import { PiNotepadFill } from "react-icons/pi"

// components
import AddOrdersForm from '../components/Order/AddOrdersForm'

// context
import { OrderContext } from '../context/OrderContext'

const Orders = () => {
  const orders = useContext(OrderContext)
  const [visible, setVisible] = useState(false)
  return (
    <div className="w-full">
      <AddOrdersForm visible={visible} setVisible={setVisible}/>

      <div className="w-full flex gap-6 justify-evenly">
        
        <div className="w-1/3 p-10 rounded h-auto flex items-center justify-center bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 drop-shadow-lg text-white">
          
          <h1 className="flex items-center font-bold text-sm tracking-widest"><PiNotepadFill className="text-3xl rounded-lg mr-6"/>Nombre de commandes:</h1>
          <span className="text-center ml-10 text-5xl font-bold tracking-wider">30</span>

        </div>

        <div className="w-1/3 p-10 rounded h-auto flex items-center justify-center bg-gradient-to-r from-sky-500/50 to-indigo-500/50 text-white drop-shadow-lg">
          
          <h1 className="flex items-center font-bold text-sm tracking-widest"><FaClock className="text-3xl rounded-lg mr-6"/>Commandes en attente:</h1>
          <span className="text-center ml-10 text-5xl font-bold tracking-wider">11</span>

        </div>

        <div className="w-1/3 p-10 rounded h-auto flex items-center justify-center bg-gradient-to-r from-rose-300/50 to-cyan-600/50 text-white drop-shadow-lg">
          
          <h1 className="flex items-center font-bold text-sm tracking-widest"><ImCheckboxChecked className="text-3xl rounded-lg mr-6"/>Nombre de ventes effectuées:</h1>
          <span className="text-center ml-10 text-5xl font-bold tracking-wider">400</span>

        </div>
      
      </div>
      <button onClick={() => setVisible(!visible)} className="mb-6 flex justify-center items-center font-bold bg-dark-purple hover:bg-dark-purple/80 transition-all text-white w-fit px-3 py-2 rounded-lg mt-6">
        <IoMdAddCircleOutline className="mr-3 text-2xl"/> Ajouter une commande
      </button>
      
      {JSON.stringify(orders)}
    </div>
  )
}

export default Orders