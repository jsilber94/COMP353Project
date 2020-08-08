import { useState } from 'react';
import { apiGetAllJobs } from '../Api';
import React from 'react';
import Media from 'react-bootstrap/Media';
import logo from './assets/job_logo.png';
import DropdownButton from 'react-bootstrap';

function JobEntry(props) {

    const style = {
        margin: 20,
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
                </p>
            </Media.Body>
        </Media>
    </div>
    )
}

function JobTable() {
    const [jobs, setJobs] = useState([])
    const [isMade, setIsMade] = useState(false)
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
    };

    const createJobList = () => {
        let values = [];
        categories.map(category => values.push(<option key={category} value={category}>{category}</option>));
        return values;
    }

    const displayJobs = () => {
        let values = [];
        jobs.map(job => {
            if(job.category == currentCategory){
                values.push(<JobEntry title={job.title} description={job.description} key={job.job_id} />);
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