import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { setMovies, fetchUser } from '../../actions/actions';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import MoviesList from '../movies-list/movies-list';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { HeaderView } from '../header-view/header-view';
import { ProfileView } from '../profile-view/profile-view';

import './main-view.scss';

class MainView extends React.Component {

    constructor() {
        super();
    }

    getMovies(token) {
        axios.get('https://movie-app-902522.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                //Assign the result to the state 
                this.props.setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getUser(token) {
        axios.get('https://movie-app-902522.herokuapp.com/users', {
            headers: {
                Authorization: `Bearer ${token}`,
                'username': this.props.user
            }
        })
            .then(response => {
                //Assign the result to the state
                this.props.fetchUser(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        let accessToken = this.props.token;

        if (accessToken !== null) {
            this.getMovies(accessToken);
        }
    }

    onLoggedIn() {
        this.getMovies(this.props.token);
        this.getUser(this.props.token);
    }

    addToFavorite(movieId) {
        let token = this.props.token;
        let username = this.props.user;
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

    render() {
        let { movies, user } = this.props;

        return (
            <Router>
                <>
                    <Row className="justify-content-md-center">
                        <HeaderView />
                    </Row>
                    <Row className="main-content">

                        <Route exact path="/" render={() => {
                            /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
                            if (!user) return (
                                <Col>
                                    <LoginView
                                        onLoggedIn={() => this.onLoggedIn()}
                                    />
                                </Col>
                            )

                            // Before the movies have been loaded
                            if (movies.length === 0) return <div className="main-view" />;

                            return <MoviesList movies={movies} />;
                        }} />

                        <Route exact path="/register" render={() => {
                            if (user) return <Redirect to="/" />
                            return (
                                <Col>
                                    <RegistrationView
                                        onSignUp={(newUser) => this.onSignUp(newUser)}
                                    />
                                </Col>
                            )
                        }} />

                        <Route exact path="/movies/:movieId" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            return <Col xs={12} md={8}>
                                <MovieView
                                    movies={movies.find(m => m._id === match.params.movieId)}
                                    onAddClick={() => { this.addToFavorite(match.params.movieId); }}
                                    onBackClick={() => history.goBack()}
                                />
                            </Col>
                        }} />

                        <Route exact path="/Directors/:name" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col xs={12} md={8}>
                                <DirectorView
                                    directorData={movies.find(m => m.Director.Name === match.params.name).Director}
                                    onBackClic={() => history.goBack()}
                                />
                            </Col>
                        }} />

                        <Route exact path="/Genres/:name" render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col xs={12} md={8}>
                                <GenreView
                                    Genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                                    onBackClick={() => history.goBack()}
                                />
                            </Col>
                        }} />

                        <Route exact path="/profile" render={({ history }) => {
                            if (!user) return <Redirect to="/" />
                            return <Col xs={12} md={8}>
                                <ProfileView
                                    movies={movies}
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

let mapStatetoProps = state => {
    return {
        movies: state.movies,
        user: state.login.user,
        token: state.login.token,

    }
}

export default connect(mapStatetoProps, { setMovies, fetchUser })(MainView);
