import React, {useState} from 'react'

// icons
import { IoMdAddCircleOutline } from "react-icons/io"

// PRIMEREACT
import { Dialog } from 'primereact/dialog'

// component
import AddProductToOrderForm from './AddProductToOrderForm'

const AddOrdersForm = ({visible, setVisible}) => {
    const [visi, setVisi] = useState(false)
    const [err, setErr] = useState(null)

    // state for the form
    const [Orders, setOrders] = useState({
        clientName: '',
        contact: '',
        location: '',
        isPayed: true
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
                    <button onClick={addOrders} className="min-w-[400px] bg-dark-purple text-white px-6 py-1 rounded-md shadow text-md">Ajouter</button>
                </div>
            } 
            visible={visible} 
            onHide={() => setVisible(false)}
            className="AddOrdersDialog"
        >
            
            <form className="flex flex-col items-center w-full">
                <div className="w-full">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="clientName">Nom du client</label>
                    <input type="text" name="clientName" onChange={handleChange} value={Orders.clientName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="clientName" />
                </div>
                <div className="mt-3 w-full">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="contact">Contact du client</label>
                    <input type="text" name="contact" onChange={handleChange} value={Orders.contact} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact" />
                </div>
                <div className="mt-3 w-full">
                    <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="location">Lieu de livraison</label>
                    <input type="text" name="location" onChange={handleChange} value={Orders.location} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="location" />
                </div>
                <button onClick={(e) => {
                    e.preventDefault() 
                    setVisi(!visi)
                }} className="flex justify-center items-center font-bold bg-dark-purple hover:bg-dark-purple/80 transition-all text-white w-fit mb-6 px-3 py-2 rounded-lg mt-6">
                    <IoMdAddCircleOutline className="mr-3 text-2xl"/> Ajouter un produit
                </button>
                <div className="flex items-center">
                    <input
                        className="border-blue-300 rounded-full h-5 w-5 text-yellow-600 focus:ring-yellow-500 cursor-pointer"
                        type="checkbox"
                        checked={Orders.isPayed}
                        onChange={() => {
                            setOrders({
                                ...Orders,
                                isPayed: !Orders.isPayed
                            })
                            console.log(Orders.isPayed)
                        }}
                        id="isPayed" 
                        name="isPayed" 
                    />
                    <label
                        className="inline-block h-auto flex items-center pl-3 hover:cursor-pointer uppercase tracking-widest text-gray-700 text-xs font-bold"
                        htmlFor="isPayed"
                    >
                        payé
                    </label>
                </div>
                {err}
            </form>
            <AddProductToOrderForm visible={visi} setVisible={setVisi}></AddProductToOrderForm>
        </Dialog>
    )
}

export default AddOrdersForm