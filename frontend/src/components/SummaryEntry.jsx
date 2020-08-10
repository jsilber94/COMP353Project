import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { apiUpdateApplication } from '../Api';

export default function SummaryEntry(props) {
    const [status, setStatus] = useState(props.status);
    const [response, setResponse] = useState('');

    const save = () => {
        apiUpdateApplication(props.application_id, status)
            .then((resp) => {
                console.log(resp);
                setResponse('success!');
            })
            .catch((error) => {
                setResponse('error');
            })
    }

    return (
        <tr>
            <td>
                <DropdownButton id="dropdown-menu-align-right" title={status}
                    className="justify-content-end">
                    <Dropdown.Item onClick={() => setStatus('reviewing')}>reviewing</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus('accepted')}>accepted</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus('rejected')}>rejected</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus('submitted')}>submitted</Dropdown.Item>
                </DropdownButton>
            </td>
            <td>{props.date_applied}</td>
            <td>{props.title}</td>
            <td>{props.fname}</td>
            <td><Button onClick={save}>Save</Button> {response}</td>
        </tr>
    )
}
