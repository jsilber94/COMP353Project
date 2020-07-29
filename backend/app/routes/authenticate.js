const authenticService = require('../services/authenticate');

function authentic(req, res) {
  const authenticData = req.body;

  authenticService.authentic(authenticData).then((data) => {
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
  authenticService.signup(signUpData).then((data) => {
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
    .post(authentic);
  router.route('/signup')
    .post(signup);
}

module.exports.init = init;
