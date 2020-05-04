"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _addPostGuest = require("../controllers/addPostGuest");

var postGuestRouter = (0, _express.Router)();
postGuestRouter.post("/", _addPostGuest.addPostGuest);
var _default = postGuestRouter;
exports["default"] = _default;