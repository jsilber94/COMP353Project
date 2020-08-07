import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';

export default function AuthRouter() {

    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    );
}
