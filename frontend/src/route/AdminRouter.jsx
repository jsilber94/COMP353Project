import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD:frontend/src/components/router/AdminRouter.jsx
import Dashboard from '../../pages/Dashboard';
import AdminDashboard from '../../pages/AdminDashboard';
import NotFound from '../../pages/NotFound';
import { useHistory } from 'react-router-dom'
=======
import AdminDashboard from '../pages/AdminDashboard';
import ChangePassword from '../pages/auth/ChangePassword';
import NotFound from '../pages/NotFound';
>>>>>>> 3acd836a799d18bc011cc4590c8cea44d1d92c12:frontend/src/route/AdminRouter.jsx

export default function AdminRouter() {
    const history = useHistory();

    return (
        <Switch>
<<<<<<< HEAD:frontend/src/components/router/AdminRouter.jsx
            <Route path="/dashboard">
                <Dashboard user={history.location.user}/>
            </Route>
=======
>>>>>>> 3acd836a799d18bc011cc4590c8cea44d1d92c12:frontend/src/route/AdminRouter.jsx
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
