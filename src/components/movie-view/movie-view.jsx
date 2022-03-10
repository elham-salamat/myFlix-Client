import React from 'react';
import PropTypes from 'prop-types';


export class MovieView extends React.Component {

    render() {
        const { movieData, onBackClick } = this.props;
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movieData.ImagePath} />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movieData.Title}</span>
                </div>
                <div className="released-year">
                    <span className="label">Released Year: </span>
                    <span className="value">{movieData.ReleasedYear}</span>
                </div>
                <div className="movie-title">
                    <span className="label">Description: </span>
                    <span className="value">{movieData.Description}</span>
                </div>
                <div className="movie-country">
                    <span className="label">Country: </span>
                    <span className="value">{movieData.Country}</span>
                </div>
                <div className="movie-director">
                    <span className="label">Directed by: </span>
                    <span className="value">{movieData.Director.Name}</span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movieData.Genre.Name}</span>
                </div>
                <div className="movie-rate">
                    <span className="label">Rating: </span>
                    <span className="value">{movieData.Rating}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>
        );
    }
}

MovieView.propTypes = {
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
    onBackClick: PropTypes.func.isRequired
}

