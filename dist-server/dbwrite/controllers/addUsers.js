"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUsers = addUsers;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addUsers(req, res) {
  var user_first_name = req.body.user_first_name;
  var user_last_name = req.body.user_last_name;
  var user_email_address = req.body.user_email_address; //Checks if the email entered is in the database.

  _models["default"].users.findAll({
    where: {
      user_email_address: user_email_address
    }
  }).then(function (results) {
    var emailNotUsed = results.length > 0 ? false : true;

    if (emailNotUsed) {
      createUser();
    } else {
      //Server caught that the email was already in the database.
      res.send(JSON.stringify("Sorry, the email you entered has already been used."));
    }
  });

  var createUser = function createUser() {
    _models["default"].users.create({
      user_first_name: user_first_name,
      user_last_name: user_last_name,
      user_email_address: user_email_address
    }).then(function (result) {
      res.send(JSON.stringify(result));
    })["catch"](function (err) {
      console.log(err);
      res.send(JSON.stringify("Error: ", err));
    });
  };
}