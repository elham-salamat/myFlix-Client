import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        let { movie } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img className="movie-poster" src={movie.ImagePath} variant="top" />
                <Card.Body>
                    <Card.Title>
                        {movie.Title}
                    </Card.Title>
                    <Card.Text>
                        {movie.Description.substr(0, 65)}
                    </Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                        <Button variant="link">Read More!</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}

