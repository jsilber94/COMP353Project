const db = require('../../config/database');
const dbFunc = require('../../config/db-function');
const loggerModel = require('../../common/logger');

function getAllApplication() {
  return new Promise((resolve, reject) => {
    const query = 'select * from Application';
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Application');
        resolve(rows);
      }
    });
  });
}

function getSummary() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT Application.status, Application.date_applied, Job.title, User.fname, Application.employer_id_fk, Application.application_id FROM Application, Job, User WHERE Application.job_id_fk =Job.job_id AND User.user_id = Application.user_id_fk';
    db.query(query, (error, rows) => {
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

function getApplicationById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Application WHERE application_id =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Application');
        resolve(rows);
      }
    });
  });
}

function addApplication(application) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO Application(status,date_applied,user_id_fk,employer_id_fk,job_id_fk)VALUES('${application.status}',NOW(),'${application.user_id_fk}','${application.employer_id_fk}','${application.job_id_fk}')`
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Application');
        resolve(rows);
      }
    });
  });
}

function updateApplication(id, application) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE Application set status='${application.status}' WHERE application_id=${id}`
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Application');
        resolve(rows);
      }
    });
  });
}

function deleteApplication(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM Application WHERE application_id='${id}'`
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Application');
        resolve(rows);
      }
    });
  });
}

const applicationModel = {
  getAllApplication,
  getSummary,
  addApplication,
  updateApplication,
  deleteApplication,
  getApplicationById,
};

module.exports = applicationModel;
