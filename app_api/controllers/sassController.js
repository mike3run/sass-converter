const sass = require('node-sass');
const sendJSONresponse = require('./sendJsonResponse');

function sassController(req, res, next) {
  res.sendJSONresponse(res, 200, {
    "status" : 200,
    "compiled" : "",
    "converted" : ""
  });
};

module.exports = sassController;
