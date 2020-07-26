const db = require('../../config/database');
const dbFunc = require('../../config/db-function');

function getAdminById(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM Admin WHERE admin_id =${id.id}`, (error, rows) => {
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
