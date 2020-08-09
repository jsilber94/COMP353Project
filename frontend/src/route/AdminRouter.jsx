import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import ReportBalance from '../pages/ReportBalance';
import ReportUser from '../pages/ReportUser';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage'
import Logs from '../pages/Logs'

export default function AdminRouter() {
    return (
        <Switch>
            <Route path="/adminDashboard">
                <AdminDashboard />
            </Route>

            <Route path="/reportBalance">
                <ReportBalance />
            </Route>

            <Route path="/reportUser">
                <ReportUser />
            </Route>

            <Route path="/change">
                <ChangePassword />
            </Route>

            <Route path="/profile">
                <ProfilePage />
            </Route>

            <Route path="/logs">
                <Logs />
            </Route>
            
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
