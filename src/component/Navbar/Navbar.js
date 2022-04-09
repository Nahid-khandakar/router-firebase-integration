import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
//import useFirebase from '../../hook/useFirebase';
import './Navbar.css'

const auth = getAuth(app);


const Navbar = () => {

    //const { user, googleSignOut } = useFirebase()
    const [user] = useAuthState(auth);

    const googleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className='link-style'>
            <Link to='/home'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='/order'>ORDER</Link>
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