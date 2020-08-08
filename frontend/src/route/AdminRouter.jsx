import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import NotFound from '../pages/NotFound';

export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/adminDashboard">
                <AdminDashboard />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
