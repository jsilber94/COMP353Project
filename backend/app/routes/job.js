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
    res.status(400);
    res.send(err.message);
  });
}

function updateJob(req, res) {
  const jobData = req.body;
  const { id } = req.params;
  jobService.updateJob(id, jobData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function deleteJob(req, res) {
  const delId = req.params.id;
  jobService.deleteJob(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getAllJobsByUserId(req, res) {
  const userId = req.params.id;
  jobService.getAllJobsByUserId(userId).then((data) => {
    res.json(data);
  }).catch((error) => {
    res.status(400);
    res.send(error.message)
  })
}

function init(router) {
  router.route('/job')
    .get(getAllJobs)
    .post(addJob);
  router.route('/job/:id')
    .get(getJobById)
    .delete(deleteJob)
    .put(updateJob);
  router.route('/job/user/:id')
    .get(getAllJobsByUserId)
}

module.exports.init = init;
