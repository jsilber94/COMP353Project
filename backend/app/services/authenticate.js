const authenticModel = require('../models/authenticate-model');

function authenticate(authenticData) {
  return new Promise((resolve, reject) => {
    authenticModel.authentic(authenticData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function signup(signUpData) {
  return new Promise((resolve, reject) => {
    authenticModel.signup(signUpData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
function changePassword(userId, oldPassword, newPassword) {
  return new Promise((resolve, reject) => {
    authenticModel.changePassword(userId, oldPassword, newPassword).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function resetPassword(email) {
  return new Promise((resolve, reject) => {
    authenticModel.resetPassword(email).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const authenticService = {
  authenticate,
  signup,
  changePassword,
  resetPassword,
};

module.exports = authenticService;
