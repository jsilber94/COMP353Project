import React from 'react';
import { useSelector } from 'react-redux';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import JobTable from '../Jobs';

// eslint-disable-next-line react/prop-types
export default function IndexRouter() {

    const isLoggedIn = useSelector(state => state.authenticationReducer.isLoggedIn);

    const role = useSelector(state => state.authenticationReducer.role);

    let router = null;

    if (isLoggedIn) {
        //TODO: Select appropriate router for type of user
        router = <AdminRouter></AdminRouter>;
    } else {
        router = <AuthRouter></AuthRouter>
    }

    return (
        <div>
            {router}
        </div>
    );
}
