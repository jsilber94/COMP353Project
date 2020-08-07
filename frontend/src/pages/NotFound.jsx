import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function NotFound(props) {

    const isLoggedIn = useSelector((state) => {
        return state.authenticationReducer.isLoggedIn
    });

    const history = useHistory();

    const returnToHome = () => {
        isLoggedIn ? history.push("/dashboard") : history.push("/");
    }

    return (
        <div>
            404 - This page doesn't exist!
            <br />
            <Button onClick={returnToHome}>Return to home!</Button>
        </div>
    );
}

export default NotFound;
