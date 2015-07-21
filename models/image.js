"use strict";

var mongoose = require("mongoose");

var generateAAA = require("adjective-adjective-animal");

var imageSchema = mongoose.Schema({
  filepath: String,
  hash: String,
  private: {
    type:Boolean,
    default: false
  },
  viewableBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

imageSchema.pre("save", function(next) {
    var image = this;
    generateAAA().then(function(aaa) {
      // aaa is an adjective-adjective-animal "hash"
      image.hash = aaa;
      next();
    });
});


module.exports = mongoose.model("Image", imageSchema);
