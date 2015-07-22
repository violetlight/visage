"use strict";

var express = require("express");
var router = express.Router();
var passport = require("../passport");

router.get("/logout", function(req, res, next) {
  if (req.user) {
    req.logout();
    res.redirect("/");
  } else {
    next();
  }
});

router.post("/login",
  passport.authenticate("local"),
  function(req, res) {
    res.redirect("/");
  }
);

/* Delete this route. generic sign up and sign in route */
router.get("/sign", function(req, res) {
  res.render("sign-up");
});

router.get("/account", function(req, res) {
  res.render("account-settings", {user:req.user});
});

var Image = require("../models/image");

/* GET '/i/:hash' - view individual image */
router.get("/i/:hash", function(req, res) {
  Image.findOne({hash: req.params.hash},
    function(err, image) {
      if (err) { res.send(err); }
      res.render("image", {image: image});
    }
  );
});

/* GET home page. */
router.get("/", function(req, res) {
  var ctx = {};
  Image.find({}, function(err, images) {
    ctx.images = images;
    if (req.user) {
      ctx.user = req.user;
    }
    res.render("index", ctx);
  });


});

module.exports = router;
