import React from 'react';
import Header from '../components/layout/Header'
import User from '../components/Users'
import { useHistory } from 'react-router-dom';

function AdminDashboard(props) {


    return (
        <div>
            <Header></Header>
            <User></User>
        </div>
    );
}

export default AdminDashboard;
