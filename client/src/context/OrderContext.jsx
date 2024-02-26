import { useContext, useState, useEffect } from 'react'
import {createContext} from 'react'
import { getOrders } from '../services/order.service'

export const OrderContext = createContext({})

export const OrderContextProvider = ({children}) => {
    const [Orders, setOrders] = useState([])
    useEffect(() => {
        getOrders().then(res => {
                  setOrders(res.data);
        }).catch(error => {
          setOrders([]);
        });
    }, [])

    return (
        <OrderContext.Provider value={{Orders, setOrders}}>
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