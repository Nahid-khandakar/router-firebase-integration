import React from 'react';
// import useFirebase from '../../hook/useFirebase';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app);

const Login = () => {

    // const { signInWithGoogle } = useFirebase()

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    //58.8 after log in go to main page

    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state.from.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    //effect of 58.8

    return (
        <div className='loginForm'>
            <h2>Log In Here</h2>
            <hr />
            <form >
                <input type="email" className='email-field' placeholder='email' />
                <br />
                <input type="password" className='password-field ' placeholder='password' />
                <br />
                {/* normal log in button */}
                <input type="submit" value="Log In" className='submit-btn' />

                {/* google sign in button */}
                {/* <input onClick={singInWithGoogle} type="submit" value="Use Google" className='submit-btn-google' /> */}

            </form>

            <button onClick={handleGoogleSignIn} className='submit-btn-google'>Use Google Log In</button>
        </div>
    );
};

export default Login;