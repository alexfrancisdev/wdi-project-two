const User = require('../models/user');

function userShow(req, res, next) {
  User
    .findById(req.params.id).populate('comments addedPosts').then(user => {
      console.log(user.comments);
      res.render('users/show', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  userShowRoute: userShow
};
