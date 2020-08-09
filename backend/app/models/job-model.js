const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllJob() {
  return new Promise((resolve, reject) => {
    db.query('select * from Job', (error, rows) => {
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
    db.query(`SELECT * FROM Job WHERE job_id =${id}`, (error, rows) => {
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
    db.query(`INSERT INTO Job(title,description,category,date_posted,employer_id_fk)VALUES('${job.title}','${job.description}', '${job.category}',NOW(),'${job.employer_id_fk}')`, (error, rows) => {
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
    db.query(`UPDATE Job set title='${job.title}',description='${job.description}' WHERE job_id='${id}'`, (error, rows) => {
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
    db.query(`DELETE FROM Job WHERE job_id='${id}'`, (error, rows) => {
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

function getAllJobsByUserId(userId) {
  const query = `SELECT DISTINCT Job.title, Job.description, Job.category, Application.status from Application, Job, User where Application.user_id_fk='${userId}' AND Job.job_id=Application.job_id_fk`
  console.log(query)
  return new Promise((resolve, reject) => {
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        console.log(error)
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    })
  })
}

const jobModel = {
  getAllJob,
  addJob,
  updateJob,
  deleteJob,
  getJobById,
  getAllJobsByUserId,
};

module.exports = jobModel;
