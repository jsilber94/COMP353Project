const db = require('../../../config/database');
const dbFunc = require('../../../config/db-function');
const loggerModel = require('../../../common/logger');

function getCheckingAccountById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM CheckingAccount WHERE checkingAccount_id =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'CheckingAccount');
        resolve(rows);
      }
    });
  });
}

function getCheckingAccountByUserId(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM CheckingAccount WHERE user_id_fk =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'CheckingAccount');
        resolve(rows);
      }
    });
  });
}

function addCheckingAccount(checkingAccount) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO CheckingAccount(bank_routing_number,account_number,user_id_fk)VALUES('${checkingAccount.bank_routing_number}','${checkingAccount.account_number}',${checkingAccount.user_id_fk})`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'CheckingAccount');
        resolve(rows);
      }
    });
  });
}

function updateCheckingAccount(id, checkingAccount) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE CheckingAccount set default_option=${checkingAccount.defaultOption} WHERE checkingAccount_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'CheckingAccount');
        resolve(rows);
      }
    });
  });
}

function deleteCheckingAccount(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM CheckingAccount WHERE checkingAccount_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        loggerModel.insertNewLog(query, 'CheckingAccount');
        resolve(rows);
      }
    });
  });
}

const checkingAccountModel = {
  addCheckingAccount,
  updateCheckingAccount,
  deleteCheckingAccount,
  getCheckingAccountById,
  getCheckingAccountByUserId,
};

module.exports = checkingAccountModel;
