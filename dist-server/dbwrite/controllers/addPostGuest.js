"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPostGuest = addPostGuest;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addPostGuest(req, res) {
  var post_id = req.body.post_id;
  var uid = req.body.uid;
  var quest_count = req.body.quest_count;
  var paid = req.body.paid; //Creation of post checks if their party can fit in the posting guest limit before creating.

  _models["default"].posts.findAll({
    where: {
      id: post_id
    }
  }).then(function (results) {
    var canFitGuest = results.post_booked_guests + quest_count > results.post_max_guests ? false : true;

    if (canFitGuest) {
      //If can fit guest than create post_guest listing
      addPostGuest();
    } else {
      //Server caught too many guests being added. Hacker or problem in client.
      res.send(JSON.stringify("Sorry, the amount of guests you are booking exceeds the posting's limit."));
    }
  });

  var addPostGuest = function addPostGuest() {
    var resultFromPostGuest;

    _models["default"].post_guests.create({
      post_id: post_id,
      uid: uid,
      quest_count: quest_count,
      paid: paid
    }).then(function (result) {
      resultFromPostGuest = result;
    }).then(function () {
      _models["default"].posts.findByPk(post_id).then(function (postSelected) {
        postSelected.post_booked_guests += quest_count;
        postSelected.save();
      });
    }).then(function () {
      JSON.stringify(resultFromPostGuest);
    })["catch"](function (err) {
      console.log(err);
      JSON.stringify("Error found: ", err);
    });
  };
}