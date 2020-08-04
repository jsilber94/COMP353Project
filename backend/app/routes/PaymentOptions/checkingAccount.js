const checkingAccountService = require('../../services/PaymentOptions/checkingAccount.js');

function getCheckingAccountById(req, res) {
  const checkingAccountId = req.params.id;

  checkingAccountService.getCheckingAccountById(checkingAccountId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function getCheckingAccountByUserId(req, res) {
  const userId = req.params.id;

  checkingAccountService.getCheckingAccountByUserId(userId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function addCheckingAccount(req, res) {
  const checkingAccountData = req.body;

  checkingAccountService.addCheckingAccount(checkingAccountData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function updateCheckingAccount(req, res) {
  const checkingAccountData = req.body;
  const { id } = req.params.id;
  checkingAccountService.updateCheckingAccount(id, checkingAccountData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function deleteCheckingAccount(req, res) {
  const delId = req.params.id;
  checkingAccountService.deleteCheckingAccount(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400);
    res.send(err.message);
  });
}

function init(router) {
  router.route('/checkingAccount')
    .post(addCheckingAccount);
  router.route('/checkingAccount/:id')
    .get(getCheckingAccountById)
    .delete(deleteCheckingAccount)
    .put(updateCheckingAccount);
  router.route('/checkingAccount/user/:id')
    .get(getCheckingAccountByUserId);
}

module.exports.init = init;
