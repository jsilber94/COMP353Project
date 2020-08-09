import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function NotFound(props) {

    const isLoggedIn = useSelector((state) => {
        return state.authenticationReducer.isLoggedIn
    });

    const history = useHistory();

    const returnToHome = () => {
        history.push("/");
    }

    return (
        <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
            <div>
                404 - This page doesn't exist!
            <br />
                <Button style={{ marginTop: '2%' }} onClick={returnToHome}>Return to login!</Button>
            </div>
        </Card>
    );
}

export default NotFound;
