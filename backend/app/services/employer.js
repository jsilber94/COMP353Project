const employerModel = require('../models/employer-model.js');

function addEmployer(employerData) {
  return new Promise((resolve, reject) => {
    employerModel.addEmployer(employerData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateEmployer(id, employerData) {
  return new Promise((resolve, reject) => {
    employerModel.updateEmployer(id, employerData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteEmployer(id) {
  return new Promise((resolve, reject) => {
    employerModel.deleteEmployer(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAppliedJobsReport(id, dates) {
  return new Promise((resolve, reject) => {
    employerModel.getAppliedJobsReport(id, dates).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAllEmployer() {
  return new Promise((resolve, reject) => {
    employerModel.getAllEmployer().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getEmployerById(id) {
  return new Promise((resolve, reject) => {
    employerModel.getEmployerById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getJobReport(jobId) {
  return new Promise((resolve, reject) => {
    employerModel.getJobReport(jobId).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const employerService = {
  getAllEmployer,
  getEmployerById,
  addEmployer,
  updateEmployer,
  deleteEmployer,
  getAppliedJobsReport,
  getJobReport,
};

module.exports = employerService;
