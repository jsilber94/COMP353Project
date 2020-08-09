const db = require('../config/database');
const dbFunc = require('../config/db-function');

function insertNewLog(query, tableName) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO logs(query,table_name)VALUES('${query}','${tableName}')`, (error, rows) => {
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

const loggerModel = {
  insertNewLog,
};

module.exports = loggerModel;
