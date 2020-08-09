const mysql = require('mysql');
// const tunnel = require('tunnel-ssh')

// var config = {
//   username:'a_corico',
//   host:'login.encs.concordia.ca',
//   dstPort: 3306,
//   dstHost: "dyc353.encs.concordia.ca",
//   password:'Alex12345678',
//   connectTimeout: 30000
// };

// var server = tunnel(config, function (error, server) {
//   if(error){
//       console.log("SSH connection error: " + error);
//   }
// });

module.exports = mysql.createPool({
  connectionLimit: 100,
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'careerportal',
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
});
