"use strict";

var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  uploadedImages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  }],
  uploadedAlbums: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album"
  }]
});

userSchema.methods.verifyPassword = function(candidate, cb) {
  bcrypt.compare(candidate, this.password,
    function(err, isMatch) {
      if (err) { return cb(err); }
      cb(null, isMatch);
    });
};

userSchema.pre("save", function(next) {
    var user = this;

    // skip if not modified
    if (!user.isModified("password")) { return next(); }

    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("User", userSchema);
