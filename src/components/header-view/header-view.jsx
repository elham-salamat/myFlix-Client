import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { signout } from '../../actions/actions';

import logo from './img/logo.jpg';
import './header-view.scss';


export function HeaderView() {

    const isAuth = useSelector(state => state.login.isAuth);
    const user = useSelector(state => state.login.user);

    const dispatch = useDispatch()

    if (isAuth) {
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
                                <Link to="/profile">{user}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link onClick={() => dispatch(signout())} to="/">Sign out</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col >
        )
    }

    return (
        <Col className="header-logo" xs={12} md={8} lg={6}>
            <Navbar className="justify-content-center" collapseOnSelect expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </Col>

    )
}