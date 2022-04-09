import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='link-style'>
            <Link to='/home'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='order'>ORDER</Link>
            <Link to='/login'>LOG IN</Link>
            <Link to='/register'>REGISTER</Link>

        </nav>
    );
};

export default Navbar;