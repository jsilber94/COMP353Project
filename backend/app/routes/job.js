const jobService = require('../services/job');

function getAllJobs(req, res) {
  jobService.getAllJob().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getJobById(req, res) {
  const jobId = req.params.id;

  jobService.getJobById(jobId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addJob(req, res) {
  const jobData = req.body;

  jobService.addJob(jobData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function updateJob(req, res) {
  const jobData = req.body;
  const { id } = req.params.id;
  jobService.updateJob(id, jobData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function deleteJob(req, res) {
  const delId = req.params.id;
  jobService.deleteJob(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function init(router) {
  router.route('/job')
    .get(getAllJobs)
    .post(addJob);
  router.route('/job/:id')
    .get(getJobById)
    .delete(deleteJob)
    .put(updateJob);
}

module.exports.init = init;
