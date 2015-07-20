"use strict";

var mongoose = require("mongoose");

var albumSchema = mongoose.Schema({
  hash: String,
  private: {
    type:Boolean,
    default: false
  },
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  }]
});

module.exports = mongoose.model("Album", albumSchema);
