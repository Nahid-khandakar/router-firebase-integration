import React from 'react';
import useFirebase from '../../hook/useFirebase';
import './Login.css'

const Login = () => {

    const { signInWithGoogle } = useFirebase()


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

            <button onClick={signInWithGoogle} className='submit-btn-google'>Use Google Log In</button>
        </div>
    );
};

export default Login;