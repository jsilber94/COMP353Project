import React, { useState } from 'react';
import { Button, Card, FormControl, FormGroup, FormLabel, DropdownButton, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EmployerHeader from '../components/layout/EmployerHeader';
import { apiPostJob } from '../Api';

// eslint-disable-next-line react/prop-types
export default function PostJobs() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState('');
    const [category, setCategory] = useState('misc');

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const sendJobs = () => {
        apiPostJob(title, description, category, id)
            .then((response) => { setResponse('Success!') })
            .catch((error) => { setResponse('Error!') })
    }

    return (
        <div>
            <EmployerHeader />
            <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
                <div className="PostJobs">
                    <FormGroup controlId="title">
                        <FormLabel>Title</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <FormLabel>Description</FormLabel>
                        <FormControl
                            autoFocus
                            type="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="Category">
                        <FormLabel>Category</FormLabel>
                        <DropdownButton id="dropdown-menu-align-right" title={category}
                            className="justify-content-end">
                            <Dropdown.Item onClick={() => setCategory('misc')}>misc</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('tech')}>tech</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('entertainment')}>entertainment</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('engineering')}>engineering</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('retail')}>retail</Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('communication')}>communication</Dropdown.Item>
                        </DropdownButton>
                    </FormGroup>

                    <Button onClick={sendJobs}>Post job!</Button>
                </div>
                <div>
                    {response}
                </div>
            </Card>
        </div>

    );
}
