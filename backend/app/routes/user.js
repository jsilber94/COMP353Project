const userService = require('../services/user');

function getUserById(req, res) {
  const userID = req.params.id;

  userService.getUserById(userID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getAllUsers(req, res) {
  userService.getAllUser().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function addUser(req, res) {
  const userData = req.body;

  userService.addUser(userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function updateUser(req, res) {
  const userData = req.body;
  const { id } = req.params;
  userService.updateUser(id, userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function deleteUser(req, res) {
  const delId = req.params.id;
  userService.deleteUser(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function respondToApplication(req, res) {
  const responseToApplication = req.body.status;

  const applicationId = req.params.id;
  userService.respondToApplication(applicationId, responseToApplication).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function makeManualPayment(req, res) {
  const { customAmount } = req.body;

  const { userId } = req.params;
  userService.makeManualPayment(userId, customAmount).then((data) => {
    if (data) {
      res.json({
        success: true,
        message: `Payment in the amount of: ${customAmount} has been made successfully.`,
      });
    }
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function withdrawApplication(req, res) {
  const { applicationId, userId } = req.params;
  userService.withdrawApplication(userId, applicationId).then((data) => {
    if (data) {
      res.json({
        success: true,
        message: 'Application has been successfully withdrawn from.',
      });
    }
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
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
  router.route('/user/:userId/application/:applicationId')
    .patch(respondToApplication)
    .get(withdrawApplication);
  router.route('/user/payment/:userId')
    .patch(makeManualPayment);
}

module.exports.init = init;
