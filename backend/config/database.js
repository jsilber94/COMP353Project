const mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit: 100,
  port:3306,
  host: 'localhost',
  user: 'dyc353_1',
  password: '1a2s3d4r',
  database: 'dyc353_1',
});