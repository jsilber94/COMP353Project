const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllApplication() {
  return new Promise((resolve, reject) => {
    db.query('select * from application', (error, rows) => {
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
    db.query(`SELECT * FROM application WHERE application_id =${id}`, (error, rows) => {
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

function addApplication(application) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Application(status,date_applied,user_id_fk,employer_id_fk,job_id_fk)VALUES('${application.status}',NOW(),'${application.user_id_fk}','${application.employer_id_fk}','${application.job_id_fk}')`, (error, rows) => {
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

function updateApplication(id, application) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE application set status='${application.status} WHERE application_id='${id}'`, (error, rows) => {
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

function deleteApplication(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM application WHERE application_id='${id}'`, (error, rows) => {
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

const applicationModel = {
  getAllApplication,
  addApplication,
  updateApplication,
  deleteApplication,
  getApplicationById,
};

module.exports = applicationModel;
