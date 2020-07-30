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

const authenticService = {
  authentic: authenticate,
  signup,
};

module.exports = authenticService;
