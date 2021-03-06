import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { FavoriteMovies } from './favorit-movies';
import { UpdateForm } from './update-Info';
import { PersonalInfo } from './user-info';

import './profile-view.scss';

export function ProfileView(props) {

    const user = useSelector(state => state.fetchUser);

    return (
        <>
            <Row className="personal-info">
                <Col className="info" xs={12} md={6}>
                    <PersonalInfo user={user} />
                </Col>
                <Col className="update" xs={12} md={6}>
                    <UpdateForm user={user} />
                </Col>
            </Row>
            <FavoriteMovies user={user} movies={props.movies} />
        </>
    )
}

