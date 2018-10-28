const User = require('../models/user');

function checkAuthStatus(req, res, next) {
  if(req.session.userId) {
    User
      .findById(req.session.userId)
      .then(user => {
        res.locals.currentUser = user;
        res.locals.isLoggedIn = true;
        next();
      });
  } else {
    next();
  }
}

module.exports = {
  checkAuthStatus: checkAuthStatus
};
