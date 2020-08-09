import React from 'react'
import Header from '../components/layout/Header';
import { useSelector } from 'react-redux';
import { apiGetAllJobs } from '../Api';

export default function Applications() {

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });


    return (
        <div>
            <Header />
        </div>
    )
}
