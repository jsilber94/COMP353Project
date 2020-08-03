const db = require('../../../config/database');
const dbFunc = require('../../../config/db-function');

function getCreditCardById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM creditCard WHERE CreditCard_id=${id}`, (error, rows) => {
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

function getCreditCardByUserId(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM creditCard WHERE user_id_fk=${id}`, (error, rows) => {
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

function addCreditCard(creditCard) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO CreditCard(credit_card_number,expiry_date,pin,name_on_card,user_id_fk)VALUES('${creditCard.credit_card_number}','${creditCard.expiry_date}','${creditCard.name_on_card}','${creditCard.user_id_fk}')`, (error, rows) => {
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

function updateCreditCard(id, creditCard) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE creditCard set default_option='${creditCard.defaultOption}', expirary_date='${creditCard.expiry_date}', pin='${creditCard.pin}' WHERE creditCard_id='${id}'`, (error, rows) => {
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

function deleteCreditCard(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM creditCard WHERE creditCard_id='${id}'`, (error, rows) => {
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

const creditCardModel = {
  addCreditCard,
  updateCreditCard,
  deleteCreditCard,
  getCreditCardById,
  getCreditCardByUserId
};

module.exports = creditCardModel;
