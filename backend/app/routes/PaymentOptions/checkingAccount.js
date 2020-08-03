const checkingAccountService = require('../../services/PaymentOptions/checkingAccount');

function getCheckingAccountById(req, res) {
  const checkingAccountId = req.params.id;

  checkingAccountService.getCheckingAccountById(checkingAccountId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addCheckingAccount(req, res) {
  const checkingAccountData = req.body;

  checkingAccountService.addCheckingAccount(checkingAccountData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function updateCheckingAccount(req, res) {
  const checkingAccountData = req.body;
  const { id } = req.params.id;
  checkingAccountService.updateCheckingAccount(id, checkingAccountData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function deleteCheckingAccount(req, res) {
  const delId = req.params.id;
  checkingAccountService.deleteCheckingAccount(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function init(router) {
  router.route('/checkingAccount')
    .post(addCheckingAccount);
  router.route('/checkingAccount/:id')
    .get(getCheckingAccountById)
    .delete(deleteCheckingAccount)
    .put(updateCheckingAccount);
}

module.exports.init = init;
