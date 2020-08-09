const db = require('../../config/database');
const dbFunc = require('../../config/db-function');
const loggerModel = require('../../common/logger');

function getAllJob() {
  return new Promise((resolve, reject) => {
    const query = db.query('select * from Job', (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
        resolve(rows);
      }
    });
  });
}

function getJobById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Job WHERE job_id =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
        resolve(rows);
      }
    });
  });
}

function addJob(job) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO Job(title,description,category,date_posted,employer_id_fk)VALUES('${job.title}','${job.description}', '${job.category}',NOW(),'${job.employer_id_fk}')`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
        resolve(rows);
      }
    });
  });
}

function updateJob(id, job) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE Job set title='${job.title}',description='${job.description}' WHERE job_id='${id}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
        resolve(rows);
      }
    });
  });
}

function deleteJob(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM Job WHERE job_id='${id}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
        resolve(rows);
      }
    });
  });
}

function getAllJobsByUserId(userId) {
  const query = `SELECT DISTINCT Job.title, Job.description, Job.category, Application.status from Application, Job, User where Application.user_id_fk='${userId}' AND Job.job_id=Application.job_id_fk`;
  return new Promise((resolve, reject) => {
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Job');
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
  getAllJobsByUserId,
};

module.exports = jobModel;
