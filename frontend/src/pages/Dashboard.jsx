import React from 'react';
import Header from '../components/layout/Header'
import JobTable from '../components/Jobs';
import { useHistory } from 'react-router-dom'

function Dashboard(props) {
    const history = useHistory();
    const user = history.location.user

    if(history.location.user){
         return (
        <div>
            <Header user={user}></Header>
        </div>
    );
    }else{
        return(
            <Header></Header>
        )
    }

   
}

export default Dashboard;
