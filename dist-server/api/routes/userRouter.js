"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getUsers = require("../controllers/getUsers");

var userRouter = (0, _express.Router)();
userRouter.get('/', _getUsers.getUsers);
var _default = userRouter;
exports["default"] = _default;