const User = require('../models/user');

function checkAuthStatus(req, res, next) {
  console.log('Checking auth status');
  console.log('Incoming request', req.method, req.originalUrl);
  if (req.session.userId) {
    console.log('auhentication if statement running');
    User.findById(req.session.userId).then(user => {
      res.locals.currentUser = user;
      res.locals.isLoggedIn = true;
      console.log('test');
      console.log(res.locals.isLoggedIn);
      next();
    });
  } else {
    console.log('authentication else running');
    console.log(req.session.userId);
    next();
  }
}

module.exports = {
  checkAuthStatus: checkAuthStatus
};
