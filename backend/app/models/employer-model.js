const db = require('../../config/database');
const dbFunc = require('../../config/db-function');
const loggerModel = require('../../common/logger');

function getAllEmployer() {
  return new Promise((resolve, reject) => {
    const query = 'select * from Employer';
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'Employer');
        resolve(rows);
      }
    });
  });
}

function getEmployerById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Employer WHERE employer_id =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function addEmployer(employer) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO Employer(fname,lname,category,email,password_hash,balance,date_last_payment,withdrawal_status)VALUES('${employer.fname}','${employer.lname}','${employer.category}','${employer.email}','${employer.password_hash}',${employer.balance},'${employer.date_last_payment}','${employer.withdrawal_status}')`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function updateEmployer(id, employer) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE Employer set fname='${employer.fname}',lname='${employer.lname}',category='${employer.category}',email='${employer.email}',password_hash='${employer.password_hash}',balance='${employer.balance}',date_last_payment='${employer.date_last_payment}',withdrawal_status='${employer.withdrawal_status}' WHERE employer_id='${id}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function deleteEmployer(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM Employer WHERE employer_id='${id}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function getAppliedJobsReport(id, dates) {
  return new Promise((resolve, reject) => {
    const query = `select substring(description, 1, 50), title, date_applied, status
    from Application, Job, Employer
    where date_applied between '${dates.startDate}' and '${dates.endDate}'
    and application.employer_id_fk = employer.Employer_id 
    and employer_id=${id}
    group by employer.employer_id;`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function getJobReport(id) {
  return new Promise((resolve, reject) => {
    const query = `select title, description, date_posted, status
                    from Application, Job, User  
                    where application.job_id_fk = job.job_id 
                    and application.job_id_fk = user.user_id
                    and job_id = ${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function dealWithApplication(userId, applicationId, status) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE Application set status='${status}' WHERE user_id_fk=${userId} and application_Id='${applicationId}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        loggerModel.insertNewLog(query, 'Employer');
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
  getAppliedJobsReport,
  getJobReport,
  dealWithApplication,
};

module.exports = employerModel;
