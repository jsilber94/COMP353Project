const express = require('express');

const app = express();
const path = require('path');
const dbfunc = require('./db-function');

const UserRoute = require('../app/routes/user');
const AdminRoute = require('../app/routes/admin');
const AuthenticRoute = require('../app/routes/authenticate');

dbfunc.connectionCheck.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

const router = express.Router();
app.use('/', router);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware

// app.use('/secureApi', secureApi);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`${err} `);
});

// index route
app.get('/', (req, res) => {
  res.send('hello world');
});

const ApiConfig = {
  app,
};

AuthenticRoute.init(router);
UserRoute.init(router);
AdminRoute.init(router);


module.exports = ApiConfig;
