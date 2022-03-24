import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { HeaderView } from '../header-view/header-view';
import { ProfileView } from '../profile-view/profile-view';

import './main-view.scss';


export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            userData: {},
            movies: [],
            user: null,
            isAuth: false
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
                });
                this.setState({
                    isAuth: true
                });

            })
            .catch(error => {
                console.log(error);
            });
    }

    getUser(token) {
        axios.get('https://movie-app-902522.herokuapp.com/users', {
            headers: {
                Authorization: `Bearer ${token}`,
                'username': localStorage.getItem('user')
            }
        })
            .then(response => {
                //Assign the result to the state 
                this.setState({
                    userData: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');

        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.setState({
                isAuth: true
            });
            this.getMovies(accessToken);
            this.getUser(accessToken);
        }
    }

    onLoggedIn(authData) {
        this.setState({
            user: authData.user.Username,
        });
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
        this.getUser(authData.token);
    }

    addToFavorite(movieId) {
        let token = localStorage.getItem('token');
        let username = localStorage.getItem('user');
        console.log(token);
        axios.post(`https://movie-app-902522.herokuapp.com/users/${username}/${movieId}`,
            null, {
            headers: {
                Authorization: `Bearer ${token}`,

            }
        })
            .then(response => {
                alert('addedd successfuly');
                this.getUser(token);
            })
            .catch(error => {
                console.log(error);
            });

    }

    getUpdatedFavorites() {
        let token = localStorage.getItem('token');
        this.getUser(token);
    }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
        this.setState({
            isAuth: false
        });

    }



    render() {
        const { movies, user, isAuth, userData } = this.state;

        return (
            <Router>
                <>
                    <Row className="justify-content-md-center">
                        <HeaderView isAuth={isAuth} username={user} onSignedOut={() => this.onLoggedOut()} />
                        {/* <HeaderView onSignedOut={() => this.onLoggedOut()} /> */}
                    </Row>
                    <Row className="main-content justify-content-md-center">

                        <Route exact path="/" render={() => {
                            /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
                            if (!user) return (
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegister={registrationRequestState => this.setRegistrationRequest(registrationRequestState)} isAuth={isAuth} />
                                </Col>
                            )

                            // Before the movies have been loaded
                            if (movies.length === 0) return <div className="main-view" />

                            return movies.map(m => (
                                <Col xs={12} md={3} key={m._id}>
                                    <MovieCard movieData={m} />
                                </Col>
                            ))
                        }} />

                        <Route exact path="/register" render={() => {
                            if (user) return <Redirect to="/" />
                            return (
                                <RegistrationView onSignUp={(newUser) => this.onSignUp(newUser)} onLogin={registrationRequestState => this.setRegistrationRequest(registrationRequestState)} />
                            )
                        }} />

                        <Route exact path="/movies/:movieId" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            return <Col xs={12} md={8}>
                                <MovieView
                                    movieData={movies.find(m => m._id === match.params.movieId)}
                                    onAddClick={() => { this.addToFavorite(match.params.movieId); }}
                                    onBackClick={() => history.goBack()}
                                />
                            </Col>
                        }} />

                        <Route exact path="/Directors/:name" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col xs={12} md={8}>
                                <DirectorView directorData={movies.find(m => m.Director.Name === match.params.name).Director} onBackClic={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route exact path="/Genres/:name" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col xs={12} md={8}>
                                <GenreView Genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route exact path="/profile" render={({ history }) => {
                            if (!user) return <Redirect to="/" />
                            return <Col xs={12} md={8}>
                                <ProfileView
                                    userData={userData}
                                    movieData={movies}
                                    onDelete={() => this.onLoggedOut()}
                                    onBackClick={() => history.goBack()}
                                />
                            </Col>
                        }} />
                    </Row>
                </>
            </Router >
        );
    }
}

