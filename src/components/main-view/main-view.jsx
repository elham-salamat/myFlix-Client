import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { HeaderView } from '../header-view/header-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registrationRequest: false
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }


    getMovies(token) {
        axios.get('https://movie-app-902522.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                //Assign the result to the state 
                this.setState({
                    movies: response.data
                }, () => {
                    console.log(this.state.movies);
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

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    setRegistrationRequest(registrationRequestState) {
        this.setState({
            registrationRequest: registrationRequestState
        })
    }

    // onSignUp(newUser) {
    //     this.setState({
    //         newUser
    //     });
    // }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }


    render() {
        const { movies, selectedMovie, user, registrationRequest } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user && !registrationRequest) return (
            <Row className="justify-content-sm-center">
                <HeaderView />
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegister={registrationRequestState => this.setRegistrationRequest(registrationRequestState)} />
            </Row>
        )

        if (!user && registrationRequest) return (
            <div>
                <HeaderView />
                <RegistrationView onSignUp={(newUser) => this.onSignUp(newUser)} onLogin={registrationRequestState => this.setRegistrationRequest(registrationRequestState)} />
            </div>
        )

        // Before the movies have been loaded
        if (movies.length === 0) return <div className="main-view" />;

        return (

            <Row className="justify-content-md-center">
                {selectedMovie
                    ? (
                        <Col sm={12} md={8}>
                            <MovieView movieData={selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                        </Col>
                    )
                    : (
                        movies.map(movie => (
                            <Col sm={12} md={3} >
                                <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                            </Col>
                        ))
                    )
                }
            </Row>

        );
    }
}