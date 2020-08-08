import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import AdminDashboard from '../../pages/AdminDashboard';
import NotFound from '../../pages/NotFound';
import { useHistory } from 'react-router-dom'

export default function AdminRouter() {
    const history = useHistory();

    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard user={history.location.user}/>
            </Route>
            <Route path="/adminDashboard">
                <AdminDashboard />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
