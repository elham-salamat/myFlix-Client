import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { deleteAccount } from '../../actions/actions';

import './profile-view.scss';

export function PersonalInfo({ user }) {

    let token = useSelector(state => state.login.token);
    const dispatch = useDispatch();

    const date = new Date(user.Birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const userBirthday = mm + '/' + dd + '/' + yyyy;



    const handledeleteaccount = (e) => {
        e.preventDefault();

        axios.delete(`https://movie-app-902522.herokuapp.com/users/${user.Username}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                alert('Are you sure? if you delete your accout, you cannot have accessibility to our movie database.');
                dispatch(deleteAccount());
                window.open('/', '_self');

            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <Card>
                <Card.Title>Your Info</Card.Title>
                <Card.Img src="http://via.placeholder.com/200x100" />
                <Card.Body>
                    <Card.Text>{user.Username}</Card.Text>
                    <Card.Text>{user.Email}</Card.Text>
                    <Card.Text>{user.Nationality}</Card.Text>
                    <Card.Text>{userBirthday}</Card.Text>
                </Card.Body>
                <Button onClick={handledeleteaccount} variant="outline-secondary">
                    Delete Account
                </Button>
            </Card>
        </>
    )
}





