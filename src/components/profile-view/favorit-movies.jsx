import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Figure } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';


import './profile-view.scss';

export function FavoriteMovies({ user, movies }) {

    const [favoriteMovies, setFavoriteMovies] = useState(movies.filter((movie) => user.FavoriteMovies.includes(movie._id)));
    let token = useSelector(state => state.login.token)
    let username = useSelector(state => state.login.user)


    function handleMyFavotite(movieId) {



        axios.delete(`https://movie-app-902522.herokuapp.com/users/${username}/${movieId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                alert('Are you sure about deleting this movie?');

                let currentFavorites = response.data.FavoriteMovies;
                setFavoriteMovies(movies.filter((movie) => currentFavorites.includes(movie._id)));
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <h4>Favorite movies</h4>
                </Col>
            </Row>
            <Row>
                {favoriteMovies.map((movie) => {
                    return (
                        <Col className="fav-movie" sm={12} md={6} lg={4} key={movie._id}>
                            <Link to={`/movies/${movie._id}`}>
                                <Figure>
                                    <Figure.Image src={movie.ImagePath} />
                                    <Figure.Caption>
                                        {movie.Title}
                                    </Figure.Caption>
                                </Figure>
                            </Link>
                            <Button onClick={(e) => handleMyFavotite(movie._id)}>not favorite</Button>
                        </Col>
                    )
                }
                )}
            </Row >
        </>
    )

}

