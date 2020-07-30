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

function init(router) {
  router.route('/login')
    .post(authenticate);
  router.route('/signup')
    .post(signup);
}

module.exports.init = init;
