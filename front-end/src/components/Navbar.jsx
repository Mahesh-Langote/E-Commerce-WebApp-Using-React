import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';
import logo from '../assets/logo.png'; 

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to="/">
                    <p className='title'>E- Commerce</p>
                </Link>
            </div>
            <div className='links'>
                <Link to="/"> SHOP </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
      
            </div>
        </div>
    );
};

export default Navbar;
