import React from 'react';


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
                    <span className="value">{movieData.Directors.Name}</span>
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
