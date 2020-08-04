const authenticateModel = require('../models/authenticate-model');

function authenticate(authenticData) {
  return new Promise((resolve, reject) => {
    authenticateModel.authenticate(authenticData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function signup(signUpData) {
  return new Promise((resolve, reject) => {
    authenticateModel.signup(signUpData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
function changePassword(userId, oldPassword, newPassword) {
  return new Promise((resolve, reject) => {
    authenticateModel.changePassword(userId, oldPassword, newPassword).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function resetPassword(email) {
  return new Promise((resolve, reject) => {
    authenticateModel.resetPassword(email).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const authenticateService = {
  authenticate,
  signup,
  changePassword,
  resetPassword,
};

module.exports = authenticateService;
