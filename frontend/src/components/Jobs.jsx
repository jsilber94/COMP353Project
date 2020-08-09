import { useState, useEffect } from 'react';
import { apiApply, apiGetAllJobs, apiGetAllApplications, apiUpdateJob } from '../Api';
import { useSelector } from 'react-redux';
import React from 'react';
import Media from 'react-bootstrap/Media';
import logo from './assets/job_logo.png';
import { Button, Card, FormControl, FormGroup, FormLabel, DropdownButton, Dropdown } from 'react-bootstrap';

function JobEntry(props) {
    const [userApplications, setUserApplications] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const style = {
        margin: 20,
    }

    const user_id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const user_category = useSelector((state) => {
        return state.authenticationReducer.category
    });

    const apply = () => {
        apiApply("submitted", user_id, props.employer_id, props.job_id)
            .then((response) => {
                if (response.statusText == "OK") {
                    console.log("application successful");
                } else {
                    setErrorMessage('Application unsuccessful.');
                }
            }).catch((error) => {
                setErrorMessage('Application unsuccessful.');
            });
    };

    //this will run on every render (fixes cases where buttons disables are delayed)
    useEffect(() => {
        apiGetAllApplications(user_id)
            .then((response) => {
                if (response.status === 200) {
                    setUserApplications(response.data.filter(application => application.user_id_fk == user_id));
                }
            })
    })

    const isUserRestricted = () => {
        switch (user_category) {
            case 'Basic':
                return true;
            case 'Prime':
                return userApplications.length >= 5;
                break;
            case 'Gold':
                return false;
        }
    }

    const cannotApply = () => {
        return (userApplications.some(application => application.job_id_fk == props.job_id) || isUserRestricted());
    }

    return (<div className="w-responsive text-center mx-auto p-3 mt-2 shadow-sm border border-dark rounded"
        style={style}
    >
        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={logo}
                alt="Job im"
            />
            <Media.Body>
                <h5>{props.title}</h5>
                <p>
                    {props.description}
                    <Button style={{ margin: '1%' }} onClick={() => apply()} disabled={cannotApply()}>Apply</Button>
                    {errorMessage}
                </p>
            </Media.Body>
        </Media>
    </div>
    )
}

function EmployerJobEntry(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [response, setResponse] = useState('');
    const [category, setCategory] = useState(props.category);

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const updateJobs = () => {
        apiUpdateJob(title, description, category, props.job_id)
            .then((resp) => {
                props.setRefresh(!props.refresh);
                setResponse('Success!');
            })
            .catch((error) => {
                setResponse('Error');
            })
    }

    return (
        <div>
            {
                props.employer_id === id && (
                    <div className="w-responsive text-center mx-auto p-3 mt-2 shadow-sm border border-dark rounded"
                        style={{ margin: '20px' }}
                    >
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={logo}
                                alt="Job im"
                            />
                            <Media.Body>
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
                                <Button onClick={updateJobs}>Update</Button>
                                <div>
                                    {response}
                                </div>
                            </Media.Body>
                        </Media>
                    </div>
                )
            }
        </div>
    );
}

function JobTable() {
    const [jobs, setJobs] = useState([]);
    const [isMade, setIsMade] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    const role = useSelector((state) => {
        return state.authenticationReducer.role
    });

    const retrieveJobs = () => {
        apiGetAllJobs()
            .then((response) => {
                if (response.status === 200) {
                    setJobs(response.data);
                    //set will remove duplicate categories
                    setCategories([...new Set(response.data.map(job => job.category))]);
                }
            }).catch((error) => {
                console.log(error);
            })
    };

    if (!isMade) {
        retrieveJobs();
        setIsMade(true);
    }

    const styles = {
        width: 500,
        margin: 'auto'
    };

    const createJobList = () => {
        let values = [];
        categories.map(category => values.push(<option key={category} value={category}>{category}</option>));
        return values;
    }

    const displayJobs = () => {
        let values = [];

        jobs.map(job => {
            if (job.category == currentCategory && role === 'user') {
                values.push(<JobEntry title={job.title} description={job.description} key={job.job_id} employer_id={job.Employer_id_fk} job_id={job.job_id} />);
            }
            if (job.category === currentCategory && role === 'employer') {
                values.push(
                    <EmployerJobEntry title={job.title} description={job.description}
                        key={job.job_id} employer_id={job.Employer_id_fk}
                        job_id={job.job_id} category={job.category}
                        refresh={isMade}
                        setRefresh={setIsMade} />
                );
            }
        });
        return values;
    };

    const handleChange = (e) => {
        setCurrentCategory(e.target.value);
    }

    return (
        <div style={styles}>
            <select onChange={handleChange}>
                {createJobList()}
            </select>
            {displayJobs()}
        </div>
    )
}

export default JobTable;