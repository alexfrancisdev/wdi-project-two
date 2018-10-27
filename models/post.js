const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: String,
  location: String,
  image: String,
  description: String,
  time: Date,
  comments: [{
    content: String,
    username: String,
    time: Date
  }],
  likes: [{
    username: String,
    time: Date
  }]
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
