const checkingAccountModel = require('../../models/paymentOptions/checkingAccount-model.js');

function addCheckingAccount(checkingAccountData) {
  return new Promise((resolve, reject) => {
    checkingAccountModel.addCheckingAccount(checkingAccountData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateCheckingAccount(id, checkingAccountData) {
  return new Promise((resolve, reject) => {
    checkingAccountModel.updateCheckingAccount(id, checkingAccountData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteCheckingAccount(id) {
  return new Promise((resolve, reject) => {
    checkingAccountModel.deleteCheckingAccount(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}


function getCheckingAccountById(id) {
  return new Promise((resolve, reject) => {
    checkingAccountModel.getCheckingAccountById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getCheckingAccountByUserId(id) {
  return new Promise((resolve, reject) => {
    checkingAccountModel.getCheckingAccountByUserId(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const checkingAccountService = {
  getCheckingAccountById,
  addCheckingAccount,
  updateCheckingAccount,
  deleteCheckingAccount,
  getCheckingAccountByUserId
};

module.exports = checkingAccountService;
