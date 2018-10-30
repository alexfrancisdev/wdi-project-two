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
  Post.findById(req.params.id).populate('comments.username addedBy').then(result => {
    res.render('posts/show', result);
  });
}

function newRoute(req, res, next) {
  res.render('posts/new');
  next();
}

function createRoute(req, res) {
  Post.create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`));
}

function updateRoute(req, res) {
  console.log(`Updating post id ${req.params.id}`, req.body);
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/posts');
    });
}

function editRoute(req, res) {
  Post.findById(req.params.id)
    .then(result => {
      res.render('posts/edit', result);
    });
}

function deleteRoute(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/posts'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  updateRoute: updateRoute,
  editRoute: editRoute,
  deleteRoute: deleteRoute
};
