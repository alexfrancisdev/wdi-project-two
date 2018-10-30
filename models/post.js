const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  location: String,
  img: String,
  description: String,
  comments: [{
    content: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    time: { type: Date, default: Date.now }
  }],
  likes: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    time: { type: Date, default: Date.now }
  }],
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  time: { type: Date, default: Date.now }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
