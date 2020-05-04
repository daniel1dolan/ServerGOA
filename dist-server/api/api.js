"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _postsRouter = _interopRequireDefault(require("./routes/postsRouter"));

var _postGuestRouter = _interopRequireDefault(require("./routes/postGuestRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _express["default"])(); // You may add api specific middlewares here
// TODO: move all controllers in the src/api/controllers folder

api.use('/users', _userRouter["default"]);
api.use('/posts', _postsRouter["default"]);
api.use('/posts/guests', _postGuestRouter["default"]);
api.get('/', function (req, res) {
  res.send({
    message: 'Hello from the API'
  });
});
var _default = api;
exports["default"] = _default;