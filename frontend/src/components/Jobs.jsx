import { useState } from 'react';
import {apiGetAllJobs} from '../Api'
import { apiGetAllUsers} from '../Api'
import React from 'react'
import Media from 'react-bootstrap/Media'
import logo from './assets/job_logo.png'
import { apiApply } from '../Api';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

function JobTable() {
    const [jobs, setJobs] = useState([])
    const [isMade, setIsMade] = useState(false)

    const retrieveJobs = () => {
        apiGetAllJobs()
        .then((response) => {
            if(response.status === 200){
                setJobs(response.data)
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    if(!isMade){
        retrieveJobs();
        setIsMade(true);
    }

    const styles = {
        width: 500,
    };
    
    
    return (
        <div style={styles}>
            {
                jobs.map(
                    retrievedJob => <JobEntry title={retrievedJob.title}  description={retrievedJob.description} key={retrievedJob.job_id} employer_id={retrievedJob.Employer_id_fk} job_id={retrievedJob.Job_id} />
            )}
        </div>
    )


function JobEntry(props){
    
        const style ={
            margin: 20,
        }
        const id = useSelector((state) => {
            return state.authenticationReducer.id
        });

    
    
        
        const [errorMessage, setErrorMessage] = useState('');
    
        const apply = () => {
            
            apiApply('submitted', user_id, employer_id, job_id)
                .then((response) => {
                    if (response.statusText == "OK") {
                        console.log("success!");
                    } else {
                        setErrorMessage('Application unsuccessful.');
                    }
                }).catch((error) => {
                    setErrorMessage('Application unsuccessful.');
                });
        };

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
                    <Button style={{ margin: '1%' }} onClick={() => apply()} >Apply</Button>
                </p>
                </Media.Body>
            </Media>
        </div>
    )
}

}
        
        export default JobTable;