import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ChangePassword from '../pages/auth/ChangePassword';
import ProfilePage from '../pages/ProfilePage';
import Header from '../components/layout/Header';
import Applications from '../pages/Applications';


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
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
