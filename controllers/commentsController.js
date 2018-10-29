const Post = require('../models/post');

function commentsCreate(req, res) {
  Post
    .findById(req.params.id)
    .then(post => {
      post.comments.push(req.body);
      post.save().then(post => res.redirect(`/posts/${post.id}`));
    });
}

function commentsDelete(req, res) {
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments.id(req.params.commentId).remove();
      post.save().then(() => res.redirect(`/posts/${post.id}`));
    });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
