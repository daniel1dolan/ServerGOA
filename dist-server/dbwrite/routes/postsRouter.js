"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _addPosts = require("../controllers/addPosts");

var postsRouter = (0, _express.Router)();
postsRouter.post("/", _addPosts.addPosts);
var _default = postsRouter;
exports["default"] = _default;