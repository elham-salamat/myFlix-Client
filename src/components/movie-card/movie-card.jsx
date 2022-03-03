import React from 'react';

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