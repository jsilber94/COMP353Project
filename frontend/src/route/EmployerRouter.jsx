import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EmployerDashboard from '../pages/EmployerDashboard';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage';

export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/employerDashboard">
                <EmployerDashboard />
            </Route>
            <Route path="/change">
                <ChangePassword />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
