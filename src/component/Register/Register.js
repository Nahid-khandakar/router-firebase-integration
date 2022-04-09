import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='loginForm'>
            <h2>Please Register Here</h2>
            <hr />
            <form >
                <input type="text" className='name-field' placeholder='Your name' />
                <br />
                <input type="email" className='email-field' placeholder='Your email' />
                <br />
                <input type="password" className='password-field ' placeholder='password' />
                <br />
                <input type="submit" value="Register" className='submit-btn' />
            </form>
        </div>
    );
};

export default Register;