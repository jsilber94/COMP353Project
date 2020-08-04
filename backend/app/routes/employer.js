const employerService = require('../services/employer');

function getAllEmployers(req, res) {
  employerService.getAllEmployer().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getEmployerById(req, res) {
  const employerId = req.params.id;

  employerService.getEmployerById(employerId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addEmployer(req, res) {
  const employerData = req.body;

  employerService.addEmployer(employerData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function updateEmployer(req, res) {
  const employerData = req.body;
  const { id } = req.params.id;
  employerService.updateEmployer(id, employerData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function deleteEmployer(req, res) {
  const delId = req.params.id;
  employerService.deleteEmployer(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function getAppliedJobsReport(req, res) {
  const employerId = req.params.id;
  const dates = req.body;
  employerService.getAppliedJobsReport(employerId, dates).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function getJobReport(req, res) {
  const jobId = req.params.id;
  employerService.getJobReport(jobId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function init(router) {
  router.route('/employer')
    .get(getAllEmployers)
    .post(addEmployer);
  router.route('/employer/:id')
    .get(getEmployerById)
    .delete(deleteEmployer)
    .put(updateEmployer);
  router.route('/employer/report/:id/user/')
    .get(getAppliedJobsReport);
  router.route('/employer/report/job/:id')
    .get(getJobReport);
}

module.exports.init = init;
