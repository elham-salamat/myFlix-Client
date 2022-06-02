import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

import { login } from '../../actions/actions';

import './login-view.scss';

export function LoginView(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const dispatch = useDispatch();

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
                    dispatch(login(response.data.token, response.data.user.Username));
                    props.onLoggedIn();
                })
                .catch(error => {
                    console.log('no such user')
                });
        }
    };


    return (
        <>
            <Row className="justify-content-sm-center">
                <Col className="login" xs={12} md={8} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Login To MyFlix</Card.Title>
                            <Card.Subtitle>Login by social networks</Card.Subtitle>
                            <Card.Link className="social-media" href="#"><i className="fa fa-linkedin-square"></i></Card.Link>
                            <Card.Link className="social-media" href="#"><i className="fa fa-google-plus-square"></i></Card.Link>
                            <Card.Link className="social-media" href="#"><i className="fa fa-facebook-square"></i></Card.Link>
                            <Card.Text>OR</Card.Text>
                            <Form className="login-form">
                                <Form.Group controlId="formUsername">
                                    <Form.Label className="label">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="enter your username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                    {usernameErr && <p>{usernameErr}</p>}
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label className="label">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="enter your password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    {passwordErr && <p>{passwordErr}</p>}
                                </Form.Group>
                                <Button className="button" type="submit" onClick={handlelogin}>Login</Button>
                            </Form>
                            <Card.Link className="reset-password" href="#">Forget your password?</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col className="seperator" xs={12} md={8} lg={6}>
                    <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;</span><span>New to MyFlix</span><span>&nbsp;</span>
                    <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col className="register" xs={12} md={8} lg={6}>
                    <Button variant="outline-secondary">
                        <Link to="/register">
                            Register
                        </Link>
                    </Button>
                </Col>
            </Row >
        </>
    )
}

