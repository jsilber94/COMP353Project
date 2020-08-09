const db = require('../../config/database');
const dbFunc = require('../../config/db-function');
const insertNewLog = require('../../common/logger');

const keys = ['fname', 'lname', 'category', 'email', 'password_hash', 'balance', 'date_last_payment', 'withdrawal_status', 'role'];

function getAllUser() {
  return new Promise((resolve, reject) => {
    const query = 'select * FROM User';
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM User WHERE user_id =${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO User(fname,lname,category,email,password_hash,balance,withdrawal_status)VALUES('${user.fname}','${user.lname}','${user.category}','${user.email}','${user.password_hash}',${user.balance},'${user.withdrawal_status}')`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function updateUserFName(id, fname) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE User set fname='${fname}' Where user_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function updateUserLName(id, lname) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE User set lname='${lname}' Where user_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function updateUserEmail(id, email) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE User set email='${email}' Where user_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function updateUser(id, user) {
  let query = 'UPDATE User set ';
  let counter = keys.length;

  for (const entry of keys) {
    if (user[entry] !== null && user[entry] !== undefined) {
      query += `${entry}='${user[entry]}'`;
      if (!--counter) {
        query += ` where user_id=${id}`;
        break;
      } else {
        query += ',';
      }
    } else {
      counter -= 1;
    }
    counter -= 1;
  }

  return new Promise((resolve, reject) => {
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        console.log(error);
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM User WHERE user_id='${id}'`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function respondToApplication(id, response) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE application set status='${response}' WHERE application_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function makeManualPayment(id, customAmount) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE User set balance=(balance-${customAmount}), date_last_payment = current_date() WHERE user_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function withdrawApplication(userId, applicationId) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE application set status='withdrawed' WHERE user_id_fk=${userId} and application_id=${applicationId}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function updateCategory(userId, category) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE User set category='${category}' WHERE user_id=${userId}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(getAllUser());
      }
    });
  });
}

function getOutstandingBalanceReport() {
  return new Promise((resolve, reject) => {
    const query = `(select      fname, lname, email, balance, date_last_payment as 'owing since'      from user      where (user.balance != 0 and user.role not like 'Admin'))
    union
    (select
       fname, lname, email, balance, date_last_payment as 'owing since'
       from employer
       where (employer.balance != 0))`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
        resolve(rows);
      }
    });
  });
}

function getUsersForEmployerReport(id) {
  return new Promise((resolve, reject) => {
    const query = `select user.fname, user.lname, user.category, user.email, user.balance 
    from User, employer, application 
    where Employer_id = ${id} 
    and Employer_id = application.employer_id_fk 
    and user_id = application.user_id_fk 
    and role like 'Employee';`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'User');
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
  updateCategory,
  getOutstandingBalanceReport,
  getUsersForEmployerReport,
  updateUserEmail,
  updateUserFName,
  updateUserLName,
};

module.exports = userModel;
