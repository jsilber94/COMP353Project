import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import EmployerHeader from '../components/layout/EmployerHeader';
import { apiGetSummary } from '../Api';
import SummaryEntry from '../components/SummaryEntry';

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
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    {summaries.map((summary) => {
                        return summary.employer_id_fk === id && (
                            <SummaryEntry
                                key={summary.application_id}
                                status={summary.status}
                                date_applied={summary.date_applied}
                                title={summary.title}
                                fname={summary.fname}
                                application_id={summary.application_id}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}
