const applicationService = require('../services/application');

function getAllApplications(req, res) {
  applicationService.getAllApplication().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getApplicationById(req, res) {
  const applicationId = req.params.id;

  applicationService.getApplicationById(applicationId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addApplication(req, res) {
  const applicationData = req.body;

  applicationService.addApplication(applicationData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function updateApplication(req, res) {
  const applicationData = req.body;
  const { id } = req.params.id;
  applicationService.updateApplication(id, applicationData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function deleteApplication(req, res) {
  const delId = req.params.id;
  applicationService.deleteApplication(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function init(router) {
  router.route('/application')
    .get(getAllApplications)
    .post(addApplication);
  router.route('/application/:id')
    .get(getApplicationById)
    .delete(deleteApplication)
    .put(updateApplication);
}

module.exports.init = init;
