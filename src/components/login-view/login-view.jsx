import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(true)

    const handlelogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    const handleregister = (e) => {
        console.log(register);
        e.preventDefault();
        console.log(props.onRegister(register));
    };

    return (
        <Col sm={12} md={4}>
            <Row className="justify-content-sm-center">
                <Col>
                    <Card className="custom-card">
                        <Card.Body className="login">
                            <Card.Title>Login To MyFlix</Card.Title>
                            <Card.Subtitle>Login using social networks</Card.Subtitle>
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
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label className="label">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="enter your password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button className="button" type="submit" onClick={handlelogin}>Log In</Button>
                            </Form>
                            <Card.Link href="#">Forget your password?</Card.Link>

                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col sm={12} md={6}>
                    <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;</span><span>New to MyFlix</span><span>&nbsp;</span>
                    <span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col sm={12} md={6}>
                    <Button type="submit" value={register} onClick={handleregister} variant="outline-secondary">Register</Button>
                </Col>
            </Row >
        </Col>
    )
}

