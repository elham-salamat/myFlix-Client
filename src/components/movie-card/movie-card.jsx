import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './movie-card.scss';
export class MovieCard extends React.Component {
    render() {
        const { movieData } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
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
            </Card>
        )
    }
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string,
        ReleasedYear: PropTypes.number,
        Country: PropTypes.array,
        Featured: PropTypes.bool,
        Rating: PropTypes.number,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            BirthYear: PropTypes.number.isRequired,
            DeathYear: PropTypes.number,
        })
    }).isRequired,
}
