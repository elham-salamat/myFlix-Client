import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './movie-view.scss';


export class MovieView extends React.Component {

    render() {
        const { movieData, onBackClick } = this.props;
        return (
            <Row>
                <Col sm={12} md={5}>
                    <Card border="light">
                        <Card.Img src={movieData.ImagePath} />
                    </Card>
                </Col>
                <Col sm={12} md={7}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title><strong>Title: </strong>{movieData.Title}</Card.Title>
                            <Card.Text><strong>Released Year: </strong>{movieData.ReleasedYear}</Card.Text>
                            <Card.Text><strong>Description: </strong>{movieData.Description}</Card.Text>
                            <Card.Text><strong>Country: </strong> {movieData.Country}</Card.Text>
                            <Card.Text><strong>Directed by: </strong>
                                <Card.Link>{movieData.Director.Name}</Card.Link>
                            </Card.Text>
                            <Card.Text><strong>Genre: </strong>
                                <Card.Link>{movieData.Genre.Name}</Card.Link>
                            </Card.Text>
                            <Card.Text><strong>Rating: </strong>{movieData.Rating}</Card.Text>

                            <Button className="button" onClick={() => { onBackClick(null); }}>Back</Button>
                            <Button className="button">Add to my favorites</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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

