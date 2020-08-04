const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllUser() {
  return new Promise((resolve, reject) => {
    db.query('select * FROM User', (error, rows) => {
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

function getUserById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM User WHERE user_id =${id}`, (error, rows) => {
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

function addUser(user) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO User(fname,lname,category,email,password_hash,balance,withdrawal_status)VALUES('${user.fname}','${user.lname}','${user.category}','${user.email}','${user.password_hash}',${user.balance},'${user.withdrawal_status}')`, (error, rows) => {
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

function updateUser(id, user) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE user set fname='${user.fname}',lname='${user.lname}',category='${user.category}',email='${user.email}',balance=${user.balance},date_last_payment='${user.date_last_payment}',withdrawal_status='${user.withdrawal_status}' WHERE user_id=${id}`, (error, rows) => {
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

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM User WHERE user_id='${id}'`, (error, rows) => {
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

function respondToApplication(id, response) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE application set status='${response}' WHERE application_id=${id}`, (error, rows) => {
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

function makeManualPayment(id, customAmount) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE user set balance=(balance-${customAmount}), date_last_payment = current_date() WHERE user_id=${id}`, (error, rows) => {
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
function withdrawApplication(userId, applicationId) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE application set status='withdrawed' WHERE user_id_fk=${userId} and application_id=${applicationId}`, (error, rows) => {
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
const userModel = {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
  getUserById,
  respondToApplication,
  makeManualPayment,
  withdrawApplication,
};

module.exports = userModel;
