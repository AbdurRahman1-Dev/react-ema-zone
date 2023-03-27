import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Order</a></li>
          <li><a href="">Inventory</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;