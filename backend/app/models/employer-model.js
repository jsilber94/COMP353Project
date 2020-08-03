const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllEmployer() {
  return new Promise((resolve, reject) => {
    db.query('select * from employer', (error, rows) => {
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

function getEmployerById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM employer WHERE employer_id =${id}`, (error, rows) => {
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

function addEmployer(employer) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Employer(fname,lname,category,email,password_hash,balance,date_last_payment,withdrawal_status)VALUES('${employer.fname}','${employer.lname}','${employer.category}','${employer.email}','${employer.password_hash}',${employer.balance},'${employer.date_last_payment}','${employer.withdrawal_status}')`, (error, rows) => {
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

function updateEmployer(id, employer) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE employer set fname='${employer.fname}',lname='${employer.lname}',category='${employer.category}',email='${employer.email}',password_hash='${employer.password_hash}',balance='${employer.balance}',date_last_payment='${employer.date_last_payment}',withdrawal_status='${employer.withdrawal_status}' WHERE employer_id='${id}'`, (error, rows) => {
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

function deleteEmployer(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM employer WHERE employer_id='${id}'`, (error, rows) => {
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

const employerModel = {
  getAllEmployer,
  addEmployer,
  updateEmployer,
  deleteEmployer,
  getEmployerById,
};

module.exports = employerModel;
