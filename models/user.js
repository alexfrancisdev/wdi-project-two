const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  profileImg: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
