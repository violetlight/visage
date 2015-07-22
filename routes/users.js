"use strict";

var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* POST "/users/" - create new User */
router.post("/", function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    res.redirect("/");
  });
});

module.exports = router;
