import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import './Navbar.css'

const Navbar = () => {

    const { user, googleSignOut } = useFirebase()
    return (
        <nav className='link-style'>
            <Link to='/home'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='order'>ORDER</Link>
            <Link to='/register'>REGISTER</Link>
            <span>{user?.displayName && user.displayName}</span>

            {
                user?.uid
                    ?
                    <button onClick={googleSignOut} className='submit-btn-google'>Sign Out</button>
                    :
                    <Link to='/login'>LOG IN</Link>
            }



        </nav>
    );
};

export default Navbar;