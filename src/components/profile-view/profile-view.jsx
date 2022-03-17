import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Button } from 'react-bootstrap';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card1';

export function ProfileView(props) {

    const user = props.userData;
    console.log(props.movieData);
    console.log(user);

    const handledeleteaccount = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        console.log(token);
        axios.delete(`https://movie-app-902522.herokuapp.com/users/${user.Username}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data);
                props.onDelete();

            })
            .catch(error => {
                console.log(error);
            });
    };

    // for (const movieId of user.FavoriteMovies) {
    //     if (movieId === props.movieData._id) {
    //         console.log()
    //     }
    // }


    return (
        <Row>
            <Card>
                <Col>
                    <Card.Img src="http://via.placeholder.com/200x70" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{user.Username}</Card.Title>
                        <Card.Title>{user.Email}</Card.Title>
                        <Card.Title>{user.Nationality}</Card.Title>
                        <Card.Title>{user.Birthday}</Card.Title>
                    </Card.Body>
                </Col>
            </Card>
            <Button variant="outline-secondary">
                <Link to="/profile/edit">
                    Edit profile
                </Link>
            </Button>
            <Button onClick={handledeleteaccount} variant="outline-secondary">
                <Link to="/">
                    Delete Account
                </Link>
            </Button>
            {/* <MovieCard favoritMovies={user.FavoritMovies} /> */}
        </Row>

    )
}