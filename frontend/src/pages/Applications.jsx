import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header';
import { useSelector } from 'react-redux';
import { apiGetAllJobs, apiGetAllApplications, apiDeleteApplication } from '../Api';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Applications() {
    const [userApplications, setUserApplications] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const user_id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const getAllUserApplications = () => {
        apiGetAllApplications()
            .then((response) => {
                if (response.status == 200) {
                    setUserApplications(response.data.filter(application => application.user_id_fk == user_id));
                } else {
                    setErrorMessage('Could not get user application history.');
                }
            }).catch((error) => {
                setErrorMessage('Could not get user application history.');
            });
    };

    const retrieveJobs = () => {
        apiGetAllJobs()
            .then((response) => {
                if (response.status === 200) {
                    setJobs(response.data);
                }
            }).catch((error) => {
                console.log(error);
            })
    };

    //runs on every render
    useEffect(() => {
        getAllUserApplications();
        retrieveJobs();
    })

    const deleteApplication = (application_id) => {
        console.log(application_id);

        apiDeleteApplication(application_id)
        .then((response) => {
            console.log(response);
            if (response.status == 200) {
                console.log("deleted");
            } else {
                setErrorMessage('Could not delete application.');
            }
        }).catch((error) => {
            setErrorMessage('Could not delete application.');
        });
    }

    const applicationRows = () => {
        let applications = [];

        userApplications.map(application => {
            if (userApplications.length && jobs.length) {
                applications.push(
                    <tr>
                        <td>{jobs.find(function (job) { return job.job_id == application.job_id_fk }).title}</td>
                        <td>{jobs.find(function (job) { return job.job_id == application.job_id_fk }).category}</td>
                        <td>{application.status}</td>
                        <td><Button variant="danger" onClick={() => deleteApplication(application.application_id)}>Delete</Button></td>
                    </tr>
                )
            }
        });

        return applications;
    }



    return (
        <div>
            <Header />
            <Table>
                <thead>
                    <tr>
                        <th>job title</th>
                        <th>category</th>
                        <th>application status</th>
                        <th>Withdraw Application</th>
                    </tr>
                </thead>
                <tbody>
                    {applicationRows()}
                </tbody>
            </Table>
            {errorMessage}
        </div>
    )
}
