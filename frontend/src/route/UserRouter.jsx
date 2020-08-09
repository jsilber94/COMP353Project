import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Applications from '../pages/Applications';
import ChangePassword from '../pages/auth/ChangePassword';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Payments from '../pages/Payments';
import ProfilePage from '../pages/ProfilePage';


export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/change">
                <ChangePassword />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path="/applications">
                <Applications />
            </Route>
            <Route path="/payments">
                <Payments />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
