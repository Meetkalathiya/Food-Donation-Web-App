// Navbar.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../component/Assets/logo.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className='nav-menu'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
