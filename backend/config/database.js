const mysql = require('mysql');
// const tunnel = require('tunnel-ssh');

// const config = {
//   username: 'a_corico',
//   host: 'login.encs.concordia.ca',
//   dstPort: 3306,
//   dstHost: 'dyc353.encs.concordia.ca',
//   password: 'Alex12345678',
//   connectTimeout: 30000,
// };

// tunnel(config, (error, server) => {
//   if (error) {
//     console.log(`SSH connection error: ${error}`);
//   } else console.log(server);
// });

// module.exports = mysql.createPool({
//   connectionLimit: 100,
//   port: 3306,
//   host: 'localhost',
//   user: 'dyc353_1',
//   password: '1a2s3d4r',
//   database: 'dyc353_1',
//   connectTimeout: 60 * 60 * 1000,
//   acquireTimeout: 60 * 60 * 1000,
//   timeout: 60 * 60 * 1000,
// });

module.exports = mysql.createPool({
  connectionLimit: 100,
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'careerportal',
});
