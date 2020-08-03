const applicationModel = require('../models/application-model.js');

function addApplication(applicationData) {
  return new Promise((resolve, reject) => {
    applicationModel.addApplication(applicationData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateApplication(id, applicationData) {
  return new Promise((resolve, reject) => {
    applicationModel.updateApplication(id, applicationData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteApplication(id) {
  return new Promise((resolve, reject) => {
    applicationModel.deleteApplication(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAllApplication() {
  return new Promise((resolve, reject) => {
    applicationModel.getAllApplication().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getApplicationById(id) {
  return new Promise((resolve, reject) => {
    applicationModel.getApplicationById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const applicationService = {
  getAllApplication,
  getApplicationById,
  addApplication,
  updateApplication,
  deleteApplication,
};

module.exports = applicationService;
