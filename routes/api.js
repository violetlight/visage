"use strict";

var express = require("express");
var router = express.Router();
var Image = require("../models/image");
var Album = require("../models/album");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  }
});
var upload = multer({ storage: storage });

/* POST '/image' - upload a single image file and create a new Image in db */
router.post("/image", upload.single("file"), function(req, res) {
  // create new Image here and save it
  var fixedPath = req.file.path.replace("public/", "");
  var image = new Image({
    filepath: fixedPath,
    viewableBy: [req.user._id], // the user that uploaded this file
  });
  image.save(function(err, image) {
    // Associate Image with uploader
    req.user.uploadedImages.push(image._id);
    // …and save changes to the User.
    req.user.save(function(err, user) {
      res.send("it saved successfully");
    });
  });
});

router.post("/album", upload.array("files"), function(req, res) {
  // create new Album here and save it
  res.send("Files uploaded successfully");
});


module.exports = router;
