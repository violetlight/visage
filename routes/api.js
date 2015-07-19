"use strict";

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('avatar'),
  function (req, res, next) {
    // create Image object with req.file.url or whatever here
    res.send("uploaded file");
  }
);

module.exports = router;
