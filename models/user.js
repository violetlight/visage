var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.validatePassword = function(password) {
  // bcrypt will go here
  return true;
}

module.exports = mongoose.model('User', userSchema);
