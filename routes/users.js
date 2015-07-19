"use strict";

var express = require('express');
var router = express.Router();

/* POST '/users/' - create new User */
router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    res.render('dashboard', {
      user: user
    });
  });
});

module.exports = router;
