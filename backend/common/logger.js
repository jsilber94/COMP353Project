const db = require('../config/database');
const dbFunc = require('../config/db-function');

function insertNewLog(query, tableName) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Logs(query,table_name)VALUES('${query}','${tableName}')`, (error, rows) => {
      if (error) {
        console.log(error);
        dbFunc.connectionRelease();
        reject(error);
      } else {
        dbFunc.connectionRelease();
        resolve(rows);
      }
    });
  });
}

function getAllLogs() {
  return new Promise((resolve, reject) => {
    db.query('Select * from Logs', (error, rows) => {
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

function getLogs() {
  return new Promise((resolve, reject) => {
    getAllLogs().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getLogsModel(req, res) {
  getLogs().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function init(router) {
  router.route('/logs')
    .get(getLogsModel);
}

const loggerModel = {
  insertNewLog,
  init,
};

module.exports = loggerModel;
