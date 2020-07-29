const adminModel = require('../models/admin.js');

function getAdminById(id) {
  return new Promise((resolve, reject) => {
    adminModel.getAdminById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const adminService = {
  getAdminById,
};

module.exports = adminService;
