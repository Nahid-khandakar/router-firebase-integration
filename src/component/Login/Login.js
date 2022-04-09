import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='loginForm'>
            <h2>Log In Here</h2>
            <hr />
            <form >
                <input type="email" className='email-field' placeholder='email' />
                <br />
                <input type="password" className='password-field ' placeholder='password' />
                <br />
                <input type="submit" value="Log In" className='submit-btn' />

                <input type="submit" value="Use Google" className='submit-btn-google' />
            </form>
        </div>
    );
};

export default Login;