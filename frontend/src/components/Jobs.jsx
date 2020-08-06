import {useState } from 'react';
import {apiGetAllJobs} from '../Api'

function JobEntry(props){

}



function JobTable(){
    const [jobs, setJobs] = useState("") 


//     const retrieveJobs = () => {
//     apiGetAllJobs()
//     .then((response) => {
//         if(response.status == 200){
//             setJobs(response.data)
//         }
//         console.log(response)
//     }).catch((error) => {
//         console.log(error);
//     })
// };

//     retrieveJobs()
    return ("hello world")
}

export default JobTable;