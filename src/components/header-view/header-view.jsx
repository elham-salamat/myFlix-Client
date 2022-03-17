import React from 'react';
import { Card, Row, Col, Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from './img/logo.jpg';
import './header-view.scss';


export function HeaderView(props) {

    const handlesignout = (e) => {
        e.preventDefault();
        props.onSignedOut();
    };

    if (props.isAuth) {
        return (
            <Row className="justify-content-md-center">
                <Col>
                    <img className="logo" src={logo} />

                    <Navbar>
                        <Container>
                            <Navbar.Text>
                                <Link to="/">
                                    <Button variant="link">Home</Button>
                                </Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to="/profile">
                                    <Button variant="link">{props.username}</Button>
                                </Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to="/">
                                    <Button onClick={handlesignout} variant="link">Sign out</Button>
                                </Link>
                            </Navbar.Text>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        )
    }

    return (
        <Row className="justify-content-md-center">
            <Col>
                <img className="logo" src={logo} />
            </Col>
        </Row>
    )


}