const adminService = require('../services/admin');

function getAdminById(req, res) {
  const adminID = req.params.id;
  adminService.getAdminById(adminID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getAllAdmin(req, res) {
  adminService.getAllAdmin().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function updateAdmin(req, res) {
  const adminData = req.body;
  const { id } = req.params.id;
  adminService.updateAdmin(id, adminData).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function deleteAdmin(req, res) {
  const { id } = req.params;
  adminService.deleteAdmin(id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function addAdmin(req, res) {
  const adminData = req.body;
  adminService.addAdmin(adminData).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getOutstandingBalanceReport(req, res) {
  adminService.getOutstandingBalanceReport().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getUsersForEmployerReport(req, res) {
  const employerId = req.params.id;
  adminService.getUsersForEmployerReport(employerId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function init(router) {
  router.route('/admin')
    .get(getAllAdmin)
    .post(addAdmin);
  router.route('/admin/:id')
    .get(getAdminById)
    .delete(deleteAdmin)
    .post(updateAdmin);
  router.route('/admin/report/balance')
    .get(getOutstandingBalanceReport);
  router.route('/admin/report/employer/:id')
    .get(getUsersForEmployerReport);
}

module.exports.init = init;
