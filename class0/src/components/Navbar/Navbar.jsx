import React from 'react'
import Logo from '../Navbar/MeraLogo.png'

const Navbar = () => {
  return (
    <div id='conatiner'>
    <div className='navbar'>
        <img src={Logo} className='logo' />
        <ul>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Service</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="btn">Book a Calling</div>
    </div>
  )
}

export default Navbar
