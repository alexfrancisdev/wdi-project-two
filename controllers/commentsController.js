const Post = require('../models/post');

function createRoute(req, res) {
  Post.findById(req.params.postId)
    .then(post => {
      post.comments.push(req.body);
      post.save().then(() => res.redirect(`/posts/${req.params.postId}`));
    });
}

function deleteRoute(req, res) {
  Post.findById(req.params.postId)
    .then(post => {
      post.comments.id(req.params.commentId).remove();
      console.log('delete running');
      post.save()
        .then(() => res.redirect(`/posts/${post._id}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
