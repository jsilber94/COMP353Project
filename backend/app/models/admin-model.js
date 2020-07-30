const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAdminById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM Admin WHERE admin_id =${id}`, (error, rows) => {
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

function getAllAdmin() {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM Admin`, (error, rows) => {
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

function addAdmin(admin) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Admin(email,password_hash)VALUES('${admin.email}','${admin.password_hash})`, (error, rows) => {
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

function updateAdmin(id, admin) {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE admin set email='${admin.email}',password_hash='${admin.password_hash}' WHERE admin_id='${id}'`, (error, rows) => {
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

function deleteAdmin(id) {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM admin WHERE admin_id='${id}'`, (error, rows) => {
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

const adminModel = {
  getAdminById,
  getAllAdmin,
  addAdmin,
  deleteAdmin,
  updateAdmin,
};

module.exports = adminModel;
