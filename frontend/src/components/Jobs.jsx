import { useState, useEffect } from 'react';
import { apiApply, apiGetAllJobs, apiGetAllApplications, apiGetEmployerById } from '../Api';
import { useSelector } from 'react-redux';
import React from 'react';
import Media from 'react-bootstrap/Media';
import logo from './assets/job_logo.png';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


function JobEntry(props) {
    const [userApplications, setUserApplications] = useState([]);
    const [employer, setEmployer] = useState();
    const [employerContactInfo, setEmployerContactInfo] = useState('');
    const [isMade, setIsMade] = useState(false);
    const [showT, setShowT] = useState(false);
    const toggleShowT = () => setShowT(!showT);
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

    const getEmployerInfo = () => {
        apiGetEmployerById(props.employer_id)
            .then((response) => {
                if (response.status === 200) {
                    setEmployer(response.data[0]);
                }
            });
    }

    if (!isMade) {
        getEmployerInfo();
        setIsMade(true);
    }

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
            });
    });

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
    };

    const cannotApply = () => {
        return (userApplications.some(application => application.job_id_fk == props.job_id) || isUserRestricted());
    };

    const displayContactInfo = () => {
        if (typeof employer != "undefined") {
            setEmployerContactInfo(`Name: ${employer.fname} ${employer.lname}   Email: ${employer.email}`);
            toggleShowT();
        }
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
                    <Button variant="warning" onClick={() => displayContactInfo()}>Stop... Get Some Help</Button>
                    <Toast show={showT} onClose={toggleShowT}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Employer Contact Info</strong>
                        </Toast.Header>
                        <Toast.Body>{employerContactInfo}</Toast.Body>
                    </Toast>
                    {errorMessage}
                </p>
            </Media.Body>
        </Media>
    </div>
    )
}

function JobTable() {
    const [jobs, setJobs] = useState([]);
    const [isMade, setIsMade] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

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
            if (job.category == currentCategory) {
                values.push(<JobEntry title={job.title} description={job.description} key={job.job_id} employer_id={job.Employer_id_fk} job_id={job.job_id} />);
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