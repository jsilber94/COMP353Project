const creditCardModel = require('../../models/PaymentOptions/creditCard-model.js');

function addCreditCard(creditCardData) {
  return new Promise((resolve, reject) => {
    creditCardModel.addCreditCard(creditCardData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateCreditCard(id, creditCardData) {
  return new Promise((resolve, reject) => {
    creditCardModel.updateCreditCard(id, creditCardData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteCreditCard(id) {
  return new Promise((resolve, reject) => {
    creditCardModel.deleteCreditCard(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getCreditCardById(id) {
  return new Promise((resolve, reject) => {
    creditCardModel.getCreditCardById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getCreditCardByUserId(id) {
  return new Promise((resolve, reject) => {
    creditCardModel.getCreditCardByUserId(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const creditCardService = {
  getCreditCardById,
  addCreditCard,
  updateCreditCard,
  deleteCreditCard,
  getCreditCardByUserId,
};

module.exports = creditCardService;
