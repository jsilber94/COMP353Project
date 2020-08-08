import React from 'react';
import { useSelector } from 'react-redux';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import UserRouter from './UserRouter'
import EmployerRouter from './EmployerRouter';

// eslint-disable-next-line react/prop-types
export default function IndexRouter() {

    const isLoggedIn = useSelector((state) => {
        return state.authenticationReducer.isLoggedIn
    });

    const role = useSelector((state) => {
        return state.authenticationReducer.role
    });

    let router = null;

    if (isLoggedIn) {
        //TODO: Select appropriate router for type of user
        if (role === 'admin') {
            router = <AdminRouter></AdminRouter>;
        } else if (role === 'user') {
            router = <UserRouter></UserRouter>
        } else if (role === 'employer') {
            router = <EmployerRouter></EmployerRouter>
        }
    } else {
        router = <AuthRouter></AuthRouter>
    }

    return (
        <div>
            {router}
        </div>
    );
}
