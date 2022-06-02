import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import reactRouterDom from 'react-router-dom';

export class DirectorView extends React.Component {
    render() {
        const { directorData } = this.props;
        return (
            <Card>
                <Card.Body>
                    <Card.Text>{directorData.Name}</Card.Text>
                    <Card.Text>{directorData.Bio}</Card.Text>
                    <Card.Text>{directorData.BirthYear}</Card.Text>
                    <Card.Text>{directorData.DeathYear}</Card.Text>
                </Card.Body>
            </Card>

        )
    }

}