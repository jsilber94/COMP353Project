import React, { useState } from 'react';
import axios from 'axios';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const jobUrl = 'http://localhost:9891/job';

  axios.get(jobUrl).then((data) => {
    setJobs(data.json());
  });

  function createTableRow(job) {
    return (
      <tr>
        <td>{job.job_id}</td>
        <td>{job.title}</td>
        <td>{job.description}</td>
        <td>{job.date_posted}</td>
      </tr>
    );
  }

  function createTable() {
    return jobs.map((job) => createTableRow(job));
  }

  return (
    <table>
      {createTable()}
    </table>
  );
}
