import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex flex-col'>
    {/* Navbar */}
      <nav className='flex bg-gray-100 items-center justify-around py-3 shadow-sm relative z-10'>
        <img src="https://www.freepnglogos.com/uploads/shopee-logo/logo-shopee-png-images-download-shopee-1.png" alt="logo" className='h-12'/>
        <ul className='flex gap-10 font-medium text-lg'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
