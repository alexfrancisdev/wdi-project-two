const Post = require('../models/post');

function indexRoute(req, res) {
  Post.find().then(function(result) {
    const postObject = {
      posts: result
    };
    res.render('posts/index', postObject);
  });
}

module.exports = {
  indexRoute: indexRoute
};
