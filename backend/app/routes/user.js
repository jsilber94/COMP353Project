const userService = require('../services/user');

function getAllUsers(req, res) {
  userService.getAllUser().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getUserById(req, res) {
  const userId = req.params;

  userService.getUserById(userId).then((data) => {
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
  const { id } = req.params;
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

function init(router) {
  router.route('/user')
    .get(getAllUsers)
    .post(addUser);
  router.route('/user/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser);
}

module.exports.init = init;
