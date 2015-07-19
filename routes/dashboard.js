"use strict";

var express = require("express");
var router = express.Router();
var passport = require("../passport");

router.get("/", function(req, res) {
  if (!req.user) { res.redirect("/"); }
  else {
    res.render("dashboard", {
      user: req.user
    });
  }
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/login",
  passport.authenticate("local"),
  function(req, res) {
    res.render("dashboard", {user: req.user});
  });


module.exports = router;
