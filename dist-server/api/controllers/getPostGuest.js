"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostGuests = getPostGuests;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPostGuests(req, res) {
  _models["default"].post_guests.findAll().then(function (results) {
    res.send(JSON.stringify(results));
  });
}