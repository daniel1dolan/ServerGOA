"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPosts = addPosts;

var _models = _interopRequireDefault(require("../../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addPosts(req, res) {
  //Need to get the uid from the user firebase object, set to 1.
  var uid = req.body.uid;
  var post_title = req.body.title;
  var post_description = req.body.description;
  var post_category = req.body.category;
  var post_images = req.body.photos;
  var post_price = req.body.price;
  var post_starting_date = req.body.date_range[0];
  var post_ending_date = req.body.date_range[1];
  var post_max_guests = req.body.guest_range[1];
  var post_booked_guests = 0;
  var post_min_guests = req.body.guest_range[0];
  var Lat = req.body.Lat;
  var Lon = req.body.Lon;
  var mapbox_description = req.body.mapbox_description;
  var image_avatar = req.body.image_avatar;
  var post_complete = false;

  var createPost = function createPost() {
    _models["default"].posts.create({
      uid: uid,
      post_title: post_title,
      post_description: post_description,
      post_category: post_category,
      post_images: post_images,
      post_price: post_price,
      post_starting_date: post_starting_date,
      post_ending_date: post_ending_date,
      post_max_guests: post_max_guests,
      post_booked_guests: post_booked_guests,
      post_min_guests: post_min_guests,
      post_complete: post_complete,
      Lat: Lat,
      Lon: Lon,
      mapbox_description: mapbox_description,
      image_avatar: image_avatar
    }).then(function (results) {
      res.send(JSON.stringify(results));
    })["catch"](function (err) {
      console.log(err);
      res.send(JSON.stringify('Error: ', err));
    });
  }; //Check if the posting is a duplicate (author has posting with same title)


  _models["default"].posts.findAll({
    where: {
      uid: uid
    }
  }).then(function (results) {
    var notDuplicate = true; // let notDuplicate = results[0].post_title === post_title ? false : true;

    if (notDuplicate) {
      console.log('...creating posting.');
      createPost();
    } else {
      console.log('...duplicate found.');
      res.send(JSON.stringify('Sorry, the posting you added seems to be a duplicate.'));
    }
  });
}