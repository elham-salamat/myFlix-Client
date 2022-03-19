import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Button } from 'react-bootstrap';
import axios from 'axios';

import { FavoriteMovies } from './favorit-movies';
import { UpdateForm } from './update-profile';

export function ProfileView(props) {

    const user = props.userData;
    // console.log(props.movieData);
    // console.log(user.FavoriteMovies);

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

    // for (let i = 0; i < user.FavoriteMovies.length; i++) {
    //     console.log(user.FavoriteMovies[i]);
    // }

    // for (let element of user.FavoriteMovies) {
    //     console.log(element);
    // }

    let favoriteMovies = props.movieData.filter((movie) => user.FavoriteMovies.includes(movie._id));

    console.log(favoriteMovies);


    return (
        <>
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
                <Button onClick={handledeleteaccount} variant="outline-secondary">
                    <Link to="/">
                        Delete Account
                    </Link>
                </Button>
                {/* <MovieCard favoritMovies={user.FavoritMovies} /> */}
            </Row>
            <UpdateForm user={user} />

            <FavoriteMovies favoriteMovies={favoriteMovies} />
        </>

    )

}
