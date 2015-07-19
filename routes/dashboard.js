"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if (!req.user) { res.redirect('/'); }
  else {
    res.render('dashboard', {
      user: req.user
    });
  }
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
