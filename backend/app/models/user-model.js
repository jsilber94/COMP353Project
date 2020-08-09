const db = require('../../config/database');
const dbFunc = require('../../config/db-function');
const dbFunction = require('../../config/db-function');

const keys = ['fname', 'lname', 'category', 'email', 'password_hash', 'balance', 'date_last_payment', 'withdrawal_status', 'role']

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

function updateUserFName(id, fname){
  return new Promise((resolve, reject) =>{
    db.query(`UPDATE User set fname='${fname}' Where user_id=${id}`, (error, rows) =>{
      if(error){
        dbFunction.connectionRelease();
        reject(error);
      }else{
        dbFunc.connectionRelease();
        resolver(rows);
      }
    })
  })
}

function updateUserLName(id, lname){
  return new Promise((resolve, reject) =>{
    db.query(`UPDATE User set lname='${lname}' Where user_id=${id}`, (error, rows) =>{
      if(error){
        dbFunction.connectionRelease();
        reject(error);
      }else{
        dbFunc.connectionRelease();
        resolver(rows);
      }
    })
  })
}

function updateUserEmail(id, email){
  return new Promise((resolve, reject) =>{
    db.query(`UPDATE User set email='${email}' Where user_id=${id}`, (error, rows) =>{
      if(error){
        dbFunction.connectionRelease();
        reject(error);
      }else{
        dbFunc.connectionRelease();
        resolver(rows);
      }
    })
  })
}



function updateUser(id, user) {
  let query = 'UPDATE User set '
  let counter = keys.length;

  for (let entry of keys){
    if(user[entry] != null && user[entry] != undefined){
      query = query + `${entry}='${user[entry]}'`
      if(!--counter){
        query = query + ` where user_id=${id}`
      }else{
        query = query + ","
      }
    }else{
      counter--;
    }
    counter--;
  }

  console.log(query)
  
  return new Promise((resolve, reject) => {
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        console.log(error)
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
    db.query(`UPDATE User set balance=(balance-${customAmount}), date_last_payment = current_date() WHERE user_id=${id}`, (error, rows) => {
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

function updateCategory(userId, category) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE User set category='${category}' WHERE user_id=${userId}`, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(getAllUser());
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
  updateUserEmail,
  updateUserFName,
  updateUserLName,
};

module.exports = userModel;
