const apis = require('./config/api-config');

const PORT = 9891;

apis.app.listen(process.env.PORT || PORT, () => {
  console.log(`server connected to port ${PORT}`);
});
