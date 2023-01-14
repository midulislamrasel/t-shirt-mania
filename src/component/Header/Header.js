import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
            <Link to ='/' className='navbar'>Home</Link>
            <Link to ='/about' className='navbar'>About</Link>
            <Link to ='/services' className='navbar'>Services</Link>
            <Link to ='/orders' className='navbar'>Orders</Link>
            <Link to ='/footer' className='navbar'>Footer</Link>
        </nav>
    );
};

export default Header;