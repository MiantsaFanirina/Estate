import { Routes, Route } from 'react-router-dom'

// styles
import "./styles/global.sass"
import './App.css'

// pages
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

// components
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
