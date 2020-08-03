const userService = require('../services/user');

function getUserById(req, res) {
  const userID = req.params.id;

  userService.getUserById(userID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getAllUsers(req, res) {
  userService.getAllUser().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addUser(req, res) {
  const userData = req.body;

  userService.addUser(userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function updateUser(req, res) {
  const userData = req.body;
  const { id } = req.params.id;
  userService.updateUser(id, userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function deleteUser(req, res) {
  const delId = req.params.id;
  userService.deleteUser(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function respondToApplication(req, res) {
  const responseToApplication = req.body.status;

  const applicationId = req.params.id;
  userService.respondToApplication(applicationId, responseToApplication).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function init(router) {
  router.route('/user')
    .get(getAllUsers)
    .post(addUser);
  router.route('/user/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser);
  router.route('/user/application/:id')
    .post(respondToApplication);
}

module.exports.init = init;
