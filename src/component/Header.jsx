import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoCodepen } from "react-icons/io";
import Logo from './images/images/logo.png'



const Header = () => {
  return (
    <header>
      <div className="nav_container" >
        <Link to={'/'} className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile">Shivam</Link></li>
          <li><Link to="/CreatPost">Creat Post</Link></li>
          <li><Link to="/Author">Authors</Link></li>
          <li><Link to="/LogOut">LogOut</Link></li>
        </ul>
        <button className='nav_toggle_btn'>
          <IoLogoCodepen/>
        </button>
      </div>

      </header>
  )
}

export default Header
