import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import EmployerHeader from '../components/layout/EmployerHeader';
import { apiGetSummary } from '../Api';

export default function Summary() {
    const [summaries, setSummaries] = useState([]);

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });


    useEffect(() => {
        apiGetSummary()
            .then((resp) => {
                if (resp.status === 200) {
                    setSummaries(resp.data);
                }
            })
            .catch((error) => { })
    }, [])


    return (
        <div>
            <EmployerHeader />
            <Table>
                <thead>
                    <tr>
                        <th>status</th>
                        <th>date applied</th>
                        <th>title</th>
                        <th>Applicant name</th>
                    </tr>
                </thead>
                <tbody>
                    {summaries.map((summary) => {
                        return summary.employer_id_fk === id && (
                            <tr>
                                <td>{summary.status}</td>
                                <td>{summary.date_applied}</td>
                                <td>{summary.title}</td>
                                <td>{summary.fname}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}
