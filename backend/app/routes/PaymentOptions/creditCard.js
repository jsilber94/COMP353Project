const creditCardService = require('../../services/PaymentOptions/creditCard');

function getCreditCardById(req, res) {
  const creditCardID = req.params.id;

  creditCardService.getCreditCardById(creditCardID).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function getCreditCardByUserId(req, res) {
  const userId = req.params.id;

  creditCardService.getCreditCardByUserId(userId).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

function addCreditCard(req, res) {
  const creditCardData = req.body;

  creditCardService.addCreditCard(creditCardData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function updateCreditCard(req, res) {
  const creditCardData = req.body;
  const { id } = req.params;
  creditCardService.updateCreditCard(id, creditCardData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function deleteCreditCard(req, res) {
  const delId = req.params.id;
  creditCardService.deleteCreditCard(delId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function init(router) {
  router.route('/creditCard')
    .post(addCreditCard);
  router.route('/creditCard/:id')
    .get(getCreditCardById)
    .delete(deleteCreditCard)
    .put(updateCreditCard);
  router.route('/creditCard/user/:id')
    .get(getCreditCardByUserId);
}

module.exports.init = init;
