import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            // registrationRequest: null
            registrationRequest: 'yes'
        }
    }

    componentDidMount() {
        axios.get('https://movie-app-902522.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    onSignUp(newUser) {
        this.setState({
            newUser
        });
    }

    // setRegisterRequest() {
    //     this.setState({
    //         registrationRequest: 'yes'
    //     });
    // }


    render() {
        const { movies, selectedMovie, user, registrationRequest } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        // if (!user && !registrationRequest) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (!user && registrationRequest) return <RegistrationView onSignUp={(newUser) => this.onSignUp(newUser)} />

        // Before the movies have been loaded
        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movieData={selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}