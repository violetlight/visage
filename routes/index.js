var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('../passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) res.redirect('/dashboard');
  res.render('sign-up');
});

router.get('/dashboard', function(req, res) {
  if (!req.user) res.redirect('/');
  res.render('dashboard', {
    user: req.user
  });
});

router.get('/dashboard/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    res.render('dashboard', {
      user: user
    })
  });
});

router.post('/sign-in',
  passport.authenticate('local'),
  function(req, res) {
    res.render('dashboard', {user: req.user});
  });
module.exports = router;
