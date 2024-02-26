import { Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/lara-light-cyan/theme.css"

// context
import { ProductContextProvider } from './context/ProductContext'
import { OrderContextProvider } from './context/OrderContext'
// styles
import "./styles/global.sass"
import './App.css'

// pages
import Products from './pages/Products'
import Orders from "./pages/Orders"
import Balance from "./pages/Balance"
import Benefits from "./pages/Benefits"
import History from "./pages/History"
import Logout from "./pages/Logout"


// components
import SideBar from './components/SideBar'

function App() {
  return (
    <>
      <div className="flex">
        <SideBar/>

        <div className="h-screen flex-1 p-7">
          <PrimeReactProvider>  
            <ProductContextProvider>  
              <Routes>
                <Route index path="/" element={<Products />}/>
                <Route path="/balance" element={<Balance />}/>
                <Route path="/benefits" element={<Benefits />}/>
                <Route path="/history" element={<History />}/>
                <Route path="/logout" element={<Logout />}/>
              </Routes>
              <OrderContextProvider>
                <Routes>
                  <Route path="/orders" element={<Orders />}/>
                </Routes>
              </OrderContextProvider>
            </ProductContextProvider>  
          </PrimeReactProvider>
        </div>
      </div>
    </>
  )
}

export default App
