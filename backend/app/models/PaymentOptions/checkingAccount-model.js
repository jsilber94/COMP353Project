const db = require('../../../config/database');
const dbFunc = require('../../../config/db-function');

function getCheckingAccountById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM CheckingAccount WHERE checkingAccount_id =${id}`, (error, rows) => {
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

function getCheckingAccountByUserId(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM CheckingAccount WHERE user_id_fk =${id}`, (error, rows) => {
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

function addCheckingAccount(checkingAccount) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO CheckingAccount(bank_routing_number,account_number,user_id_fk)VALUES('${checkingAccount.bank_routing_number}','${checkingAccount.account_number}',${checkingAccount.user_id_fk})`, (error, rows) => {
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

function updateCheckingAccount(id, checkingAccount) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE CheckingAccount set default_option=${checkingAccount.defaultOption} WHERE checkingAccount_id=${id}`, (error, rows) => {
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

function deleteCheckingAccount(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM CheckingAccount WHERE checkingAccount_id=${id}`, (error, rows) => {
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

const checkingAccountModel = {
  addCheckingAccount,
  updateCheckingAccount,
  deleteCheckingAccount,
  getCheckingAccountById,
  getCheckingAccountByUserId,
};

module.exports = checkingAccountModel;
