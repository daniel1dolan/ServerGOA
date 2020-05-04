"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPosts(req, res) {
  _models["default"].posts.findAll().then(function (results) {
    res.send(JSON.stringify(results));
  });
}