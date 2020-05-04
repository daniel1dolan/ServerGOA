"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUsers(req, res) {
  //   res.send({
  //     users: [
  //       { id: 1, name: 'How to train your dragon' },
  //       { id: 2, name: 'Queen of Katwe' },
  //     ],
  _models["default"].users.findAll().then(function (results) {
    res.send(JSON.stringify(results));
  });
}