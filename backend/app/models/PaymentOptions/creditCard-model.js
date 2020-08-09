const db = require('../../../config/database');
const dbFunc = require('../../../config/db-function');
const insertNewLog = require('../../../common/logger');

function getCreditCardById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM CreditCard WHERE CreditCard_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'CreditCard');
        resolve(rows);
      }
    });
  });
}

function getCreditCardByUserId(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM CreditCard WHERE user_id_fk=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'CreditCard');
        resolve(rows);
      }
    });
  });
}

function addCreditCard(creditCard) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO CreditCard(credit_card_number,expiry_date,pin,name_on_card,user_id_fk)VALUES('${creditCard.credit_card_number}',${creditCard.expiry_date},'${creditCard.name_on_card}',${creditCard.user_id_fk})`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'CreditCard');
        resolve(rows);
      }
    });
  });
}

function updateCreditCard(id, creditCard) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE CreditCard set default_option=${creditCard.defaultOption}, expirary_date=${creditCard.expiry_date}, pin='${creditCard.pin}' WHERE creditCard_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'CreditCard');
        resolve(rows);
      }
    });
  });
}

function deleteCreditCard(id) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM CreditCard WHERE creditCard_id=${id}`;
    db.query(query, (error, rows) => {
      if (error) {
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        insertNewLog(query, 'CreditCard');
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
  getCreditCardByUserId,
};

module.exports = creditCardModel;
