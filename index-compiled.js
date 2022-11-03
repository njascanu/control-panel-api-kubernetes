"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _bootstrap = _interopRequireDefault(require("./apps/bootstrap"));
var bootstrap = new _bootstrap["default"]();
bootstrap.run(function (port) {
  return console.log("Server started and running on port ".concat(port, "."));
});
