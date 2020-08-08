import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage'

export default function AdminRouter() {
    return (
        <Switch>
            <Route path="/adminDashboard">
                <AdminDashboard />
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
