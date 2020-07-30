const adminModel = require('../models/admin-model.js');

function addAdmin(userData) {
  return new Promise((resolve, reject) => {
    userModel.addAdmin(userData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAdminById(id) {
  return new Promise((resolve, reject) => {
    adminModel.getAdminById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAllAdmin() {
  return new Promise((resolve, reject) => {
    adminModel.getAllAdmin().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateAdmin(id, userData) {
  return new Promise((resolve, reject) => {
    adminModel.updateAdmin(id, userData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteAdmin(id) {
  return new Promise((resolve, reject) => {
    userModel.deleteAdmin(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const adminService = {
  getAdminById,
  getAllAdmin,
  updateAdmin,
  deleteAdmin,
  addAdmin,
};

module.exports = adminService;
