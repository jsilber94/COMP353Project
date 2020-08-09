import React from 'react';
import Header from '../components/layout/Header'
import User from '../components/Users'
import { useHistory } from 'react-router-dom';

function AdminDashboard(props) {

    const history = useHistory();
    if (history.location.data && history.location.data.length() > 0)
        debugger;
    console.log()
    props = history.location.data;
    return (
        <div>
            <Header></Header>
            <User {...props}></User>
        </div>
    );
}

export default AdminDashboard;
