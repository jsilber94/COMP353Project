const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAllAdmin() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Admin', (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows[0]);
      }
    });
  });
}

function getAdminById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM Admin WHERE admin_id =${id}`, (error, rows) => {
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

function addAdmin(admin) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Admin(email,password_hash)VALUES('${admin.email}','${admin.password_hash})`, (error, rows) => {
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

function updateAdmin(id, admin) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE admin set email='${admin.email}',password_hash='${admin.password_hash}' WHERE admin_id=${id}`, (error, rows) => {
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

function deleteAdmin(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM admin WHERE admin_id=${id}`, (error, rows) => {
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

function getOutstandingBalanceReport() {
  return new Promise((resolve, reject) => {
    db.query('(select fname, lname, email, balance, date_last_payment as \'owing since\' from user where (user.account_status = \'frozen\' || user.account_status = \'deactivated\'))union (select fname, lname, email, balance, date_last_payment as \'owing since\'  from employer where (employer.account_status = \'frozen\' || employer.account_status = \'deactivated\')) order by fname', (error, rows) => {
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

function getUsersForEmployerReport(id) {
  return new Promise((resolve, reject) => {
    db.query(`select user.fname, user.lname, user.category, user.email, user.balance, user.account_status from user, employer, application where Employer_id = ${id} and Employer_id = application.employer_id_fk and user_id = application.user_id_fk`, (error, rows) => {
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
const adminModel = {
  getAdminById,
  getAllAdmin,
  addAdmin,
  deleteAdmin,
  updateAdmin,
  getOutstandingBalanceReport,
  getUsersForEmployerReport,
};

module.exports = adminModel;
