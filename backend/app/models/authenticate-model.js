const bcrypt = require('bcryptjs');
const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function authentic(authenticData) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM user WHERE email ='${authenticData.email}'`, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        bcrypt.compare(authenticData.password, rows[0].password_hash, (err, isMatch) => {
          if (err) {
            reject(error);
          } else if (isMatch) {
            resolve(`Logged in user:${authenticData.email}`);
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ success: false, message: 'password does not match' });
          }
        });
      }
    });
  });
}

function signup(user) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return err;
      }
      return bcrypt.hash(user.password, salt, (err2, hash) => {
        if (err2) {
          return err2;
        }
        // eslint-disable-next-line no-param-reassign
        user.password_hash = hash;
        return db.query(`SELECT * FROM user WHERE email='${user.email}'`, (error, rows) => {
          if (error) {
            dbFunc.connectionRelease();
            reject(error);
          } else if (rows.length > 0) {
            dbFunc.connectionRelease();
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ success: false, message: 'User already exists. Please try with a different email' });
          } else {
            db.query(`INSERT INTO User(fname,lname,email,password_hash)VALUES('${user.fname}','${user.lname}','${user.email}','${user.password_hash}')`, (error2, rows2) => {
              if (error2) {
                dbFunc.connectionRelease();
                reject(error2);
              } else {
                dbFunc.connectionRelease();
                resolve(rows2);
              }
            });
          }
        });
      });
    });
  });
}

const authenticModel = {
  authentic,
  signup,
};

module.exports = authenticModel;
