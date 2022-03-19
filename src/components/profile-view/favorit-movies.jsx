import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Figure } from 'react-bootstrap';
import axios from 'axios';

export function FavoriteMovies({ favoriteMovies }) {

    function handleMyFavotite(movieId) {
        console.log(movieId);
        let token = localStorage.getItem('token');
        let username = localStorage.getItem('user');

        axios.delete(`https://movie-app-902522.herokuapp.com/users/${username}/${movieId}`, {
            headers: {
                Authorization: `Bearer ${token}`,

            }
        })
            .then(response => {
                //Assign the result to the state 
                console.log('deleted successfuly');
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Row>
                <Col>
                    <h4>Favorite movies</h4>
                </Col>
            </Row>
            <Row>

                {favoriteMovies.map((movie) => {
                    return (
                        <Col key={movie._id}>
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

