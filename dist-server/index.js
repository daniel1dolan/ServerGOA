"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("../models"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api = _interopRequireDefault(require("./api/api"));

var _dbwrite = _interopRequireDefault(require("./dbwrite/dbwrite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])()); //////////ADDING POSTS
// db.posts.findByPk(2).then((result) => {
//   result.uid = 'zm53pP4j2vX2pWs4pZNyAJFvx2o1';
//   result.Lon = '-97.7734';
//   result.Lat = '30.2769';
//   result.mapbox_description = '401 Deep Eddy Ave Austin, TX 78703';
//   result.image_avatar =
//     'https://lh5.googleusercontent.com/-Z1i2SU-4L50/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN9oQBRJkzLoMpscNUSS-F5QeRnsw/photo.jpg';
//   result.save();
// });
///// Deleting Posts
// for (let index = 21; index < 25; index++) {
//   db.posts.destroy({ where: { id: index } });
// }

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('/api/v1', _api["default"]);
app.use('/dbwrite/v1', _dbwrite["default"]);
app.listen(process.env.PORT, function () {
  console.log("listening on ".concat(process.env.PORT));
  console.log(process.env.MY_SECRET);
});