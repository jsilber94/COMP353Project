const authenticateService = require('../services/authenticate');

function authenticate(req, res) {
  const authenticData = req.body;

  authenticateService.authentic(authenticData).then((data) => {
    if (data) {
      res.json({
        success: true,
        data,
      });
    }
  }).catch((err) => {
    res.json(err);
  });
}

function signup(req, res) {
  const signUpData = req.body;
  authenticateService.signup(signUpData).then((data) => {
    if (data) {
      res.json({
        success: true,
        data,
      });
    }
  }).catch((err) => {
    res.json(err);
  });
}

function changePassword(req, res) {
  const { newPassword, oldPassword } = req.body;

  const userId = req.params.id;
  authenticateService.changePassword(userId, oldPassword, newPassword).then((data) => {
    if (data) {
      res.json({
        success: true,
        data,
      });
    }
  }).catch((err) => {
    res.json(err);
  });
}

function resetPassword(req, res) {
  const { email } = req.params;
  authenticateService.resetPassword(email).then((data) => {
    if (data) {
      res.json({
        success: true,
        message: data,
      });
    }
  }).catch((err) => {
    res.json({
      success: false,
      message: err.message,
    });
  });
}

function init(router) {
  router.route('/login')
    .post(authenticate);
  router.route('/signup')
    .post(signup);
  router.route('/password/user/change/:id')
    .post(changePassword);
  router.route('/password/user/reset/:email')
    .get(resetPassword);
}

module.exports.init = init;
