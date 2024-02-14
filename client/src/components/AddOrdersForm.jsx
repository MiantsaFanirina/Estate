import React, {useState} from 'react'

// icons
import { IoMdAddCircleOutline } from "react-icons/io";

// PRIMEREACT
import { Dialog } from 'primereact/dialog'

const AddOrdersForm = ({visible, setVisible}) => {
  
    const [err, setErr] = useState(null)

    // state for the form
    const [Orders, setOrders] = useState({
        clientName: '',
        contact: '',
        location: '',
    })  
    const handleChange = (e) => {
        setOrders({
            ...Orders,
            [e.target.name]: e.target.value
        })
    }

    const addOrders = async (e) => {
        e.preventDefault()
    }

    return (
        <Dialog 
            header={
                <h3>Ajouter une commande</h3>
            } 
            footer={
                <div className="mt-3">
                    <button onClick={addOrders} className="bg-dark-purple text-white px-6 py-1 rounded-md shadow text-md">Ajouter</button>
                </div>
            } 
            visible={visible} 
            onHide={() => setVisible(false)}
            className="AddOrdersDialog"
        >
            
            <form className="flex flex-col items-center">
                <div>
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="clientName">Nom du client</label>
                    <input type="text" name="clientName" onChange={handleChange} value={Orders.clientName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="clientName" />
                </div>
                <div className="mt-3">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="contact">Contact du client</label>
                    <input type="text" name="contact" onChange={handleChange} value={Orders.contact} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact" />
                </div>
                <div className="mt-3">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="location">Lieu de livraison</label>
                    <input type="text" name="location" onChange={handleChange} value={Orders.location} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="location" />
                </div>

                <button onClick={() => setVisible(!visible)} className="flex justify-center items-center font-bold bg-dark-purple hover:bg-dark-purple/80 transition-all text-white w-fit px-3 py-2 rounded-lg mt-6">
                    <IoMdAddCircleOutline className="mr-3 text-2xl"/> Ajouter un produit
                </button>
                {err}
            </form>

        </Dialog>
    )
}

export default AddOrdersForm