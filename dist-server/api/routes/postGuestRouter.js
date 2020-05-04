"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getPostGuest = require("../controllers/getPostGuest");

var postGuestRouter = (0, _express.Router)();
postGuestRouter.get('/', _getPostGuest.getPostGuests);
var _default = postGuestRouter;
exports["default"] = _default;