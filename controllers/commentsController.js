const Post = require('../models/post');

function createRoute(req, res) {
  console.log('Invoking createRoute');
  Post.findById(req.params.postId)
    .then(post => {
      console.log('Creating a comment!', post, req.body);
      console.log('post comments is: ', post.comments);
      post.comments.push(req.body);
      console.log('comment made');
      post.save().then(() => res.redirect('/posts'));
    });
}

function deleteRoute(req, res) {
  console.log('Deleting comment', req.params.commentId);
  Post.findById(req.params.postId)
    .then(post => {
      post.comments.id(req.params.commentId).remove();
      post.save()
        .then(() => res.redirect(`/posts/${req.params.postId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
