const adminService = require('../services/admin');

function getAdminById(req, res) {
  const adminID = req.params.id;
  adminService.getAdminById(adminID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getAllAdmin(req, res) {
  adminService.getAllAdmin().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function updateAdmin(req, res) {
  const adminData = req.body;
  const { id } = req.params.id;
  adminService.updateAdmin(id, adminData).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function deleteAdmin(req, res) {
  const { id } = req.params;
  adminService.deleteAdmin(id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addAdmin(req, res) {
  const adminData = req.body;
  adminService.addAdmin(adminData).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getOutstandingBalanceReport(req, res) {
  adminService.getOutstandingBalanceReport().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getUsersForEmployerReport(req, res) {
  const employerId = req.params.id;
  adminService.getUsersForEmployerReport(employerId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
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
