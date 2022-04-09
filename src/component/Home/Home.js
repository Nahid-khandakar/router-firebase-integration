import React from 'react';
import useFirebase from '../../hook/useFirebase';
import './Home.css'

const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h1>That Person Log In</h1>
            <h3>{user ? user.displayName : 'Nobody Log In'}</h3>
        </div>
    );
};

export default Home;