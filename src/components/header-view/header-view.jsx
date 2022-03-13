import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import logo from './img/logo.jpg';
import './header-view.scss';

export function HeaderView(props) {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <Row className="justify-content-md-center">
            <Col sm={12} md={4}>
                <img className="logo" src={logo} />
            </Col>
        </Row>
    )
}