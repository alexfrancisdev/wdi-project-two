const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: String,
  location: String,
  image: String,
  description: String,
  comments: [{
    content: String,
    username: String,
    time: Date
  }],
  likes: [{
    username: String,
    time: Date
  }],
  time: { type: Date, default: Date.now }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
