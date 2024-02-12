import { Routes, Route } from 'react-router-dom'

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
          <Routes>
            <Route index path="/" element={<Products />}/>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/balance" element={<Balance />}/>
            <Route path="/benefits" element={<Benefits />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/logout" element={<Logout />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
