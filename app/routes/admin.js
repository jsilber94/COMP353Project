const adminService = require('../services/admin');

function getAdminById(req, res) {
  const adminID = req.params;
  adminService.getAdminById(adminID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function init(router) {
  router.route('/admin/:id')
    .get(getAdminById);
}

module.exports.init = init;
