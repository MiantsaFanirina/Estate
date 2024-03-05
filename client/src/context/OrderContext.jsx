import { useContext, useState, useEffect } from 'react'
import {createContext} from 'react'
import { getOrders } from '../services/order.service'

export const OrderContext = createContext({})

export const OrderContextProvider = ({children}) => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        getOrders().then(res => {
                  setAllOrders(res.data);
        }).catch(error => {
          setAllOrders([]);
        });
    }, [])

    return (
        <OrderContext.Provider value={{allOrders, setAllOrders}}>
            {children}
        </OrderContext.Provider>
    )
    
}


export const useOrderContext = () => {
    const Orders = useContext(OrderContext)
    if (Orders === undefined) {
        throw new Error('useOrderContext must be used within a OrderContextProvider')
    }
    return Orders
}