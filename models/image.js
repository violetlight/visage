"use strict";

var mongoose = require("mongoose");

var imageSchema = mongoose.Schema({
  filepath: String,
  private: {
    type:Boolean,
    default: false
  },
  viewableBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Image", imageSchema);
