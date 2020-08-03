const jobModel = require('../models/job-model.js');

function addJob(jobData) {
  return new Promise((resolve, reject) => {
    jobModel.addJob(jobData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateJob(id, jobData) {
  return new Promise((resolve, reject) => {
    jobModel.updateJob(id, jobData).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function deleteJob(id) {
  return new Promise((resolve, reject) => {
    jobModel.deleteJob(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getAllJob() {
  return new Promise((resolve, reject) => {
    jobModel.getAllJob().then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function getJobById(id) {
  return new Promise((resolve, reject) => {
    jobModel.getJobById(id).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}

const jobService = {
  getAllJob,
  getJobById,
  addJob,
  updateJob,
  deleteJob,
};

module.exports = jobService;
