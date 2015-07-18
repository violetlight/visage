var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    res.render('dashboard', {
      user: user
    })
  });
});

router.post('/sign-in', function(req, res) {
  User.findOne(req.body, function(err, user) {
    console.log(err, user);
    if (err) res.send(err);
    res.render('dashboard', {
      user: user
    });
  });
});

module.exports = router;
