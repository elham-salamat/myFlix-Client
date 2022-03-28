import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';

import './profile-view.scss';

export function UpdateForm({ user }) {
    const date = new Date(user.Birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const userBirthday = mm + '-' + dd + '-' + yyyy;

    console.log(userBirthday)

    const [username, setUsername] = useState(`${user.Username}`);
    // const [password, setPassword] = useState(`${user.Password}`);
    const [email, setEmail] = useState(`${user.Email} `);
    const [birthday, setBirthday] = useState(`${userBirthday} `);
    const [nationality, setNationality] = useState(`${user.Nationality} `);
    const [password, setPassword] = useState(928582101);

    // Handling the form submission
    const handleupdate = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        let currentUsername = localStorage.getItem('user');

        // setPassword(928582101);
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(birthday);
        console.log(nationality);

        axios.put(`https://movie-app-902522.herokuapp.com/users/${currentUsername}`, {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
            Nationality: nationality
        }, {
            headers: {


                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                alert('your info updated successfuly');
            })
            .catch(error => {
                console.log('error updating the user');
            });
    };

    return (
        <Col className="update" xs={12} md={12}>
            <Card>
                <Card.Title>Update Your Information</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            >

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBirthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                type="datetime"
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formNationality">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control
                                type="text"
                                value={nationality}
                                onChange={e => setNationality(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group> */}
                        <Button type="submit" onClick={handleupdate} variant="outline-secondary">update</Button>
                    </Form>
                </Card.Body >
            </Card >
        </Col >
    )
}