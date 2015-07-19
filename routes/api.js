"use strict";

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads/' });

router.post("/upload", upload.single('file'), function(req, res) {
  console.dir(req.file);
  res.send("File uploaded successfully");
});


module.exports = router;
