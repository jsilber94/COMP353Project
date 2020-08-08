import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';

export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/adminDashboard">
                <AdminDashboard />
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
