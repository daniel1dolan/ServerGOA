"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getPosts = require("../controllers/getPosts");

var postsRouter = (0, _express.Router)();
postsRouter.get('/', _getPosts.getPosts);
var _default = postsRouter;
exports["default"] = _default;