import React, { useState } from 'react';

import './login-view.scss';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    // const handlesignup = (e) => {
    //     console.log('elham');
    // };

    return (
        <div className='login-page'>
            <div className="main">
                <h3 className="logo">MyFlix</h3>
                <div className='content'>
                    <h1>Login To Your Account</h1>
                    <p>Login using social networks</p>
                    <div>
                        <i className="fa fa-linkedin-square"></i>
                        <i className="fa fa-google-plus-square"></i>
                        <i className="fa fa-facebook-square"></i>
                    </div>
                    <p>
                        <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;</span><span>OR</span><span>&nbsp;</span>
                        <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <form className="login-form">
                        <input type="text" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <button className="button" type="submit" onClick={handlelogin}>Login</button>
                    </form>
                    <a href="#" className="password-reset">Forget your password?</a>
                    <br />
                    <a href="#" className="delete-account">Delete your account</a>
                </div>
            </div>
            <div className="signup">
                <h2>New here?</h2>
                <p>Sign up and enjoy your customize MyFlix</p>
                <button className="button" type="submit">Sign Up</button>
                {/* <button className="button" type="submit" onClick={handlesignup}>Sign Up</button> */}
            </div>
        </div>
    )
}