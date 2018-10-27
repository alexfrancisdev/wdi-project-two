const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Post = require('../models/post');

Post.collection.drop();

const postData = [{
  username: 'alex',
  location: 'Sri Lanka',
  image: 'https://i.imgur.com/0CLxnnl.jpg',
  description: 'Kayaking in the mangroves'
}];

Post.create(postData).then(result => {
  console.log(`Created ${result.length} posts!`);
  mongoose.connection.close();
});
