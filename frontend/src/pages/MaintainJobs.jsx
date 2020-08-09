import React from 'react';
import Jobs from '../components/Jobs';
import EmployerHeader from '../components/layout/EmployerHeader';

// eslint-disable-next-line react/prop-types
export default function MaintainJobs() {

    return (
        <div>
            <EmployerHeader />
            <Jobs />
        </div>
    );
}
