import React, { useState } from 'react';

import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [nationality, setNationality] = useState('');
    const [submitted, setSubmitted] = useState(false);



    // Handling the form submission
    const handlesignup = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('elham')
    };

    return (
        <div className='signup-page'>
            <div className="main">
                <h3 className="logo">MyFlix</h3>
                <div className='content'>
                    <h1>Register in MyFlix</h1>
                    <p>Sign up using social networks</p>
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
                    <form className="signup-form">
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="datetime" placeholder="Birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                        <input type="text" placeholder="Nationality" value={nationality} onChange={e => setNationality(e.target.value)} />
                        <button type="submit" onClick={handlesignup}>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="signup">
                <h2>Already have an acount</h2>
                <button className="button" type="submit">Login</button>
            </div>
        </div>
    )
}