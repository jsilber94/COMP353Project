import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import SignUp from '../../pages/auth/SignUp';
import ForgotPassword from '../../pages/auth/ForgotPassword';

export default function AuthRouter() {

    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/forgot">
                <ForgotPassword />
            </Route>
        </Switch>
    );
}
