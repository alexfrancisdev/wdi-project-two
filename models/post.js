const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: String,
  location: String,
  img: String,
  description: String,
  comments: [{
    content: String,
    username: String,
    time: { type: Date, default: Date.now }
  }],
  likes: [{
    username: String,
    time: { type: Date, default: Date.now }
  }],
  time: { type: Date, default: Date.now }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
