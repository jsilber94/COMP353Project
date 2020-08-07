import React from 'react';
import { useSelector } from 'react-redux';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';

// eslint-disable-next-line react/prop-types
export default function IndexRouter() {

    const isLoggedIn = useSelector(state => state.authenticationReducer.isLoggedIn);

    let router = null;

    if (isLoggedIn) {
        //TODO: Get role and select appropriate router for type of user
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
