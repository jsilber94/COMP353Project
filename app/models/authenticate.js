const bcrypt = require('bcryptjs');
const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function authentic(authenticData) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM user WHERE username ='${authenticData.username}'`, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        bcrypt.compare(authenticData.password, rows[0].password, (err, isMatch) => {
          if (err) {
            reject(error);
          } else if (isMatch) {
            resolve(rows);
          } else {
            reject(new Error({ success: false, message: 'password doesnot match' }));
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
        return next(err);
      }
      return bcrypt.hash(user.password, salt, (err2, hash) => {
        if (err2) {
          return next(err2);
        }
        // eslint-disable-next-line no-param-reassign
        user.password = hash;
        return db.query(`SELECT * FROM user WHERE username='${user.username}'`, (error, rows) => {
          if (error) {
            dbFunc.connectionRelease();
            reject(error);
          } else if (rows.length > 0) {
            dbFunc.connectionRelease();
            reject(new Error({ success: false, message: 'user already exist ! try with different user' }));
          } else {
            db.query(`INSERT INTO user(username,password)VALUES('${user.username}','${user.password}')`, (error2, rows2) => {
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
