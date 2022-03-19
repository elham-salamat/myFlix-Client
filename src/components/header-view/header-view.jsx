import React from 'react';
import { Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
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
            <Col className="header" xs={12} md={10} lg={6}>
                <Navbar collapseOnSelect expand="lg" fixed="top" >
                    <Navbar.Brand href="/">
                        <img
                            className="align-top"
                            src={logo}
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="nav">
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/profile">{props.username}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link onClick={handlesignout} to="/">Sign out</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col >
        )
    }

    return (
        <Col className="header" xs={12} md={8} lg={6}>
            <Navbar className="justify-content-center" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        className="d-inline-block align-top"
                        src={logo}
                        alt="logo"
                        width="60"
                        height="50"
                    />
                </Navbar.Brand>
            </Navbar>
        </Col>

    )


}