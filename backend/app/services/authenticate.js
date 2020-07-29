const authenticModel = require('../models/authenticate');

function authentic(authenticData) {
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
  authentic,
  signup,
};

module.exports = authenticService;
