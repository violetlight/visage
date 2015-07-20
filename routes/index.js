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


/* GET home page. */
router.use("/", function(req, res) {
  if (req.user) {
    res.render("index", {
      user: req.user
    });
  }
  else {
    res.render("index");
  }
});

module.exports = router;
