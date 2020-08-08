import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { apiApply } from '../Api';
import { useSelector } from 'react-redux';
import Jobs from '../components/Jobs'

export default function Apply() {

    const userId = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const jobId = useSelector((state) => {
        return state.authenticationReducer.jobId
    });

    const employerId = useSelector((state) => {
        return state.authenticationReducer.employerId
    });

    const [errorMessage, setErrorMessage] = useState('');

    const apply = () => {
        apiApply(userId, jobId, employerId)
            .then((response) => {
                if (response.statusText == "OK") {
                 
                } else {
                    setErrorMessage('Application unsuccessful.');
                }
            }).catch((error) => {
                setErrorMessage('Application unsuccessful.');
            });
    };
    
    return (
        <div>
            <Button style={{ margin: '1%' }} onClick={() => apply()} >Apply</Button>
        </div>
    )
}
