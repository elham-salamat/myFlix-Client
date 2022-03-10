import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        return (
            <div className="movie-card">
                <div className="movie-img" onClick={() => { onMovieClick(movieData); }}>
                    <img src={movieData.ImagePath} />
                </div>
                <div className="movie-title" onClick={() => { onMovieClick(movieData); }}>
                    {movieData.Title}
                </div>
                <div className="movie-Desc" onClick={() => { onMovieClick(movieData); }}>
                    {movieData.Description}
                </div>
            </div>
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
