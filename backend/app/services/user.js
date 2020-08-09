const userModel = require('../models/user-model.js');

function addUser(userData) {
  return new Promise((resolve, reject) => {
    userModel.addUser(userData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateUser(id, userData) {
  return new Promise((resolve, reject) => {
    userModel.updateUser(id, userData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateUserFName(id, fname){
  return new Promise((resolve, reject) =>{
    userModel.updateUserFName(id, fname).then((data) =>{
      resolve(data);
    }).catch((error) =>{
      reject(err);
    })
  })
}

function updateUserLName(id, lname){
  return new Promise((resolve, reject) =>{
    userModel.updateUserLName(id, lname).then((data) =>{
      resolve(data);
    }).catch((error) =>{
      reject(err);
    })
  })
}

function updateUserEmail(id, email){
  return new Promise((resolve, reject) =>{
    userModel.updateUserLName(id, email).then((data) =>{
      resolve(data);
    }).catch((error) =>{
      reject(err);
    })
  })
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    userModel.deleteUser(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAllUser() {
  return new Promise((resolve, reject) => {
    userModel.getAllUser().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    userModel.getUserById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function respondToApplication(id, response) {
  return new Promise((resolve, reject) => {
    userModel.respondToApplication(id, response).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function makeManualPayment(id, customAmount) {
  return new Promise((resolve, reject) => {
    userModel.makeManualPayment(id, parseFloat(customAmount)).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function withdrawApplication(userId, applicationId) {
  return new Promise((resolve, reject) => {
    userModel.withdrawApplication(userId, applicationId).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateCategory(userId, category) {
  return new Promise((resolve, reject) => {
    userModel.updateCategory(userId, category).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const userService = {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  respondToApplication,
  makeManualPayment,
  withdrawApplication,
  updateCategory,
};

module.exports = userService;
