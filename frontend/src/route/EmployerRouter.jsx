import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EmployerDashboard from '../pages/EmployerDashboard';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';

export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/employerDashboard">
                <EmployerDashboard />
            </Route>
            <Route path="/change">
                <ChangePassword />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
