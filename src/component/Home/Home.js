import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
//import useFirebase from '../../hook/useFirebase';
import './Home.css'


const auth = getAuth(app);

const Home = () => {
    //const { user } = useFirebase()

    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>That Person Log In</h1>
            <h3>{user ? user.displayName : 'Nobody Log In'}</h3>
        </div>
    );
};

export default Home;