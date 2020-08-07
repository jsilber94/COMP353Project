import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import NotFound from '../../pages/NotFound';

export default function AdminRouter() {

    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
