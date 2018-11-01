const User = require('../models/user');

function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate({
      path: 'addedPosts',
      options: {
        sort: '-time'
      }
    })
    .then(user => {
      res.render('users/show', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function updateUser(req, res) {
  console.log(`Updating post id ${req.params.id}`, req.body);
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/users/${req.params.id}`);
    });
}

function editUser(req, res) {
  User.findById(req.params.id)
    .then(result => {
      res.render('users/edit', result);
    });
}

module.exports = {
  userShowRoute: userShow,
  userEditRoute: editUser,
  userUpdateRoute: updateUser
};
