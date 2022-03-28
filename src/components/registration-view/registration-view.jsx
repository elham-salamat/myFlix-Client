import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [repassword, setRepassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [nationality, setNationality] = useState('');
    // const [submitted, setSubmitted] = useState(false);
    const [login, setLogin] = useState(false)



    // Handling the form submission
    const handlesignup = (e) => {
        e.preventDefault();
        // setSubmitted(true);
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(birthday);
        console.log(nationality);

        axios.post('https://movie-app-902522.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
            Nationality: nationality
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                // window.open('/', '_self');

            })
            .catch(error => {
                console.log('error registering the user')
            });
    };

    return (
        <Col className="register" xs={12} md={8} lg={6}>
            <Card>
                <Card.Body>
                    <Card.Title>Create an account</Card.Title>
                    <Card.Subtitle>Sign up by social networks</Card.Subtitle>
                    <Card.Link className="social-media" href="#"><i className="fa fa-linkedin-square"></i></Card.Link>
                    <Card.Link className="social-media" href="#"><i className="fa fa-google-plus-square"></i></Card.Link>
                    <Card.Link className="social-media" href="#"><i className="fa fa-facebook-square"></i></Card.Link>
                    <Card.Text>OR</Card.Text>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                Required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter a valid email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                Required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBirthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                type="datetime"
                                placeholder="12.01.1990"
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                                Required
                            />
                        </Form.Group>
                        <Form.Group controlId="formNationality">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="What is your nationality"
                                value={nationality}
                                onChange={e => setNationality(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Group controlId="formPassword">
                                    <Form.Label>Re-enter password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Re-enter your password"
                                        value={repassword}
                                        onChange={e => setReassword(e.target.value)}
                                    />
                                </Form.Group> */}
                        <Button type="submit" onClick={handlesignup} variant="outline-secondary">Create an account</Button>
                    </Form>
                    <Card.Text className="link-to-login">Already have an account?</Card.Text>
                    <Button variant="outline-secondary">
                        <Link to="/">Login</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    )
}