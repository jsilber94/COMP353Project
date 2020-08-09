import React from 'react';
import EmployerHeader from '../components/layout/EmployerHeader';
import UserCategory from '../components/UserCategory';
import User from '../components/Users'

function EmployerDashboard(props) {

    return (
        <div>
            <EmployerHeader />
            <UserCategory />
            <User></User>
        </div>
    );
}

export default EmployerDashboard;
