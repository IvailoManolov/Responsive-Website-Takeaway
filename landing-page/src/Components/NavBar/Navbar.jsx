import React, { useState } from 'react'
import logo from "../../Images/Logo.jpg"
import "./Navbar.css"

const Navbar = () => {

  const [nav,setNav] = useState(false)

  const changeBackground = () => {

    if(window.scrollY >= 50)
    {
      setNav(true)
    }

    else{
      setNav(false)
    }
  }

  window.addEventListener('scroll',changeBackground)

  return (
    <nav className= {nav ? 'nav active' : 'nav'}>
        <a href='##' className='logo'>
          <img src={logo} alt=''/>
        </a>

        <label className='menu-icon'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><a href='##' className='active'>Home</a></li>
          <li><a href='##'>Store</a></li>
          <li><a href='##'>Payments</a></li>
          <li><a href='##'>Track Order</a></li>
          <li><a href='##'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar