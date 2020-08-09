import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChangePassword from '../pages/auth/ChangePassword';
import EmployerDashboard from '../pages/EmployerDashboard';
import NotFound from '../pages/NotFound';
import Payments from '../pages/Payments';
import ProfilePage from '../pages/ProfilePage';
import PostJobs from '../pages/PostJobs';
import MaintainJobs from '../pages/MaintainJobs';

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
            <Route path="/payments">
                <Payments />
            </Route>
            <Route path="/postjobs">
                <PostJobs />
            </Route>
            <Route path="/maintain">
                <MaintainJobs />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
