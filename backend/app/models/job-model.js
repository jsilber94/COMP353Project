const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllJob() {
  return new Promise((resolve, reject) => {
    db.query('select * from job', (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function getJobById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM job WHERE job_id =${id}`, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function addJob(job) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Job(title,description,date_posted,employer_id_fk)VALUES('${job.title}','${job.description}',NOW(),'${job.employer_id_fk}')`, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function updateJob(id, job) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE job set title='${job.title}',description='${job.description}' WHERE job_id='${id}'`, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function deleteJob(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM job WHERE job_id='${id}'`, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

const jobModel = {
  getAllJob,
  addJob,
  updateJob,
  deleteJob,
  getJobById,
};

module.exports = jobModel;
