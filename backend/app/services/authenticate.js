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
function resetPassword(userId, oldPassword, newPassword) {
  return new Promise((resolve, reject) => {
    authenticModel.resetPassword(userId, oldPassword, newPassword).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const authenticService = {
  authenticate,
  signup,
  resetPassword,
};

module.exports = authenticService;
