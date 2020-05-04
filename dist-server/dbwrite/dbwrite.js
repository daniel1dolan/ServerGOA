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

var dbwrite = (0, _express["default"])(); // You may add dbwrite specific middlewares here
// Check for login data here.

dbwrite.use("/users", _userRouter["default"]);
dbwrite.use("/posts", _postsRouter["default"]);
dbwrite.use("/posts/guests", _postGuestRouter["default"]);
dbwrite.get("/", function (req, res) {
  res.send({
    message: "Hello from the DbWriter"
  });
});
var _default = dbwrite;
exports["default"] = _default;