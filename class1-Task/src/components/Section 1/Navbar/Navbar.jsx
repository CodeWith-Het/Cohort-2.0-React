import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Horizon Court</h3>
      <ul>
        <li className='about'>About us</li>
        <li>Service</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
      <button className='bookbtn'>Book Now</button>
    </div>
  )
}

export default Navbar
