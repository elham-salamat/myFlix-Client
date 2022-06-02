import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

export class GenreView extends React.Component {
    render() {
        const { Genre } = this.props;

        return (
            <Card>
                <Card.Body>
                    <Card.Title>{Genre.Name}</Card.Title>
                    <Card.Text>{Genre.Description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}