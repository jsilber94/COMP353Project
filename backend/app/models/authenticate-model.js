const bcrypt = require('bcryptjs');
const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

const mailer = require('../../common/mailer');

function authenticate(authenticData) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM User WHERE email ='${authenticData.email}'`, (error, rows) => {
      if (error) {
        reject(error);
      } else if (rows.length < 1) {
        reject(new Error('Email or password do not match'));
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
        return db.query(`SELECT * FROM User WHERE email='${user.email}'`, (error, rows) => {
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

function changePassword(userId, oldPassword, newPassword) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT password_hash FROM User WHERE user_id =${userId}`, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return bcrypt.compare(oldPassword, rows[0].password_hash, (err, isMatch) => {
        if (err) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return reject(err);
        } if (isMatch) {
          return bcrypt.genSalt(10, (err3, salt) => {
            if (err3) {
              return err3;
            }
            return bcrypt.hash(newPassword, salt, (err2, hash) => {
              if (err2) {
                return err2;
              }
              // eslint-disable-next-line no-param-reassign
              newPassword = hash;
              return db.query(`UPDATE User set password_hash='${newPassword}' WHERE user_id=${userId}`, (error4) => {
                if (error4) {
                  dbFunc.connectionRelease();
                  return reject(error4);
                }
                dbFunc.connectionRelease();
                return resolve('Password has been changed');
              });
            });
          });
          // eslint-disable-next-line prefer-promise-reject-errors
        } return reject({ success: false, message: 'password does not match' });
      });
    });
  });
}

function resetPassword(email) {
  return new Promise((resolve, reject) => db.query(`SELECT * FROM User WHERE email='${email}'`, (error, rows) => {
    if (rows.length > 0 && rows[0]) {
      mailer.mail('Reset your email here: ', email, 'Password reset');
      resolve('Reset email sent!');
    }
    reject(new Error('Email is not a match'));
  }));
}

const authenticModel = {
  authenticate,
  signup,
  changePassword,
  resetPassword,
};

module.exports = authenticModel;
