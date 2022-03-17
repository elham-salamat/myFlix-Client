import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';


import './movie-card.scss';
export function MovieCard(props) {

    console.log(props)
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img className="movie-poster" src={movieData.ImagePath} variant="top" />
            <Card.Body>
                <Card.Title>
                    {movieData.Title}
                </Card.Title>
                <Card.Text>
                    {movieData.Description}
                </Card.Text>
                <Link to={`/movies/${movieData._id}`}>
                    <Button variant="link">Read More!</Button>
                </Link>
            </Card.Body>
        </Card >
    )
}

