"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _addUsers = require("../controllers/addUsers");

var userRouter = (0, _express.Router)();
userRouter.post("/", _addUsers.addUsers);
var _default = userRouter;
exports["default"] = _default;