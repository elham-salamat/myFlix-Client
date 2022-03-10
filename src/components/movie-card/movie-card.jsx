import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

import PropTypes from 'prop-types';

import './movie-card.scss';
export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img className="movie-poster" src={movieData.ImagePath} onClick={() => { onMovieClick(movieData); }} variant="top" />
                <Card.Body>
                    <Card.Title onClick={() => { onMovieClick(movieData); }}>
                        {movieData.Title}
                    </Card.Title>
                    <Card.Text onClick={() => { onMovieClick(movieData); }}>
                        {movieData.Description}
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => { onMovieClick(movieData); }} variant="link">Read More!</Button>
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
    onMovieClick: PropTypes.func.isRequired
}
