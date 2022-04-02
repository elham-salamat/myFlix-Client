import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button } from 'react-bootstrap';

import './movie-view.scss';


export class MovieView extends React.Component {

    render() {
        const { movies, onAddClick } = this.props;

        return (
            <Row>
                <Col sm={12} md={5}>
                    <Card border="light">
                        <Card.Img src={movies.ImagePath} />
                    </Card>
                </Col>
                <Col sm={12} md={7}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title><strong>Title: </strong>{movies.Title}</Card.Title>
                            <Card.Text><strong>Released Year: </strong>{movies.ReleasedYear}</Card.Text>
                            <Card.Text><strong>Description: </strong>{movies.Description}</Card.Text>
                            <Card.Text><strong>Country: </strong> {movies.Country}</Card.Text>
                            <Card.Text><strong>Directed by: </strong>
                                <Link to={`/directors/${movies.Director.Name}`}>
                                    {movies.Director.Name}
                                </Link>
                            </Card.Text>
                            <Card.Text><strong>Genre: </strong>
                                <Link to={`/Genres/${movies.Genre.Name}`}>
                                    {movies.Genre.Name}
                                </Link>
                            </Card.Text>
                            <Card.Text><strong>Rating: </strong>{movies.Rating}</Card.Text>

                            <Button variant="outline-primary">
                                <Link to="/">Back</Link>
                            </Button>


                            <Button onClick={() => { onAddClick(); }} variant="outline-primary">Add to my favorites</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        );
    }
}


