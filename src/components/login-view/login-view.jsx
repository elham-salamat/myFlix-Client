import React, { useState } from 'react';
import axios from 'axios';

import './login-view.scss';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [register, setRegister] = useState(true);

    //validate user inputs
    const validate = () => {
        let isReq = true;

        if (!username) {
            setUsernameErr('username Required');
            isReq = false;
        } else if (username.length < 3) {
            setUsernameErr('Username must be at least 3 character!');
            isReq = false;
        }

        if (!password) {
            setPasswordErr('Password Required');
            isReq = false;
        } else if (password.length < 6) {
            setPasswordErr('password must be at least 6 characters');
            isReq = false;
        }

        return isReq
    }

    const handlelogin = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
            axios.post('https://movie-app-902522.herokuapp.com/login', {
                Username: username,
                Password: password
            })
                .then(response => {
                    const data = response.data;
                    props.onLoggedIn(data);
                })
                .catch(error => {
                    console.log('no such user')
                });
        }
    };

    const handleregister = (e) => {
        e.preventDefault();
        console.log(props.onRegister(register));
    };

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
                        {/* code added here to display validation error */}
                        {usernameErr && <p>{usernameErr}</p>}
                        <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        {/* code added here to display validation error */}
                        {passwordErr && <p>{passwordErr}</p>}
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
                <button className="button" type="submit" value={register} onClick={handleregister}>Register</button>
            </div>
        </div>
    )
}