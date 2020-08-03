const employerService = require('../services/employer');

function getAllEmployers(req, res) {
  employerService.getAllEmployer().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getEmployerById(req, res) {
  const employerId = req.params;

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
  const { id } = req.params;
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

function init(router) {
  router.route('/employer')
    .get(getAllEmployers)
    .post(addEmployer);
  router.route('/employer/:id')
    .get(getEmployerById)
    .delete(deleteEmployer)
    .put(updateEmployer);
}

module.exports.init = init;
