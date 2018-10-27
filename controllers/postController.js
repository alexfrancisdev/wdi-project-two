const Post = require('../models/post');

function indexRoute(req, res) {
  Post.find().then(function(result) {
    const postObject = {
      posts: result
    };
    res.render('posts/index', postObject);
  });
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  Post.findById(req.params.id).then(result => {
    res.render('posts/show', result);
  });
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute
};
