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

var Image = require('../models/image');
/* GET home page. */
router.use("/", function(req, res) {
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
