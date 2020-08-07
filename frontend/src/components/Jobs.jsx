import { useState } from 'react';
import {apiGetAllJobs} from '../Api'
import React from 'react'
import Media from 'react-bootstrap/Media'
import logo from './assets/job_logo.png'

function JobEntry(props){
    
    const style ={
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
    
    
    function JobTable(){
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
                        retrievedJob => <JobEntry title={retrievedJob.title}  description={retrievedJob.description} key={retrievedJob.job_id}/>
                )}
            </div>
        )
        }
        
        export default JobTable;