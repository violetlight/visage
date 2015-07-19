"use strict";

var express = require("express");
var router = express.Router();
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  }
});
// var upload = multer({ dest: "./public/images" });
var upload = multer({ storage: storage });


router.post("/upload", upload.single("file"), function(req, res) {
  // create new Image here and save it
  res.send("File uploaded successfully");
});


module.exports = router;
