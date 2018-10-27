const User = require('../models/user');

function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  User.create(req.body)
    .then(result => {
      console.log('User created', result);
      res.redirect('/');
    });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res) {
  console.log('User is logging in', req.body);
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        res.redirect('/login');
      } else {
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
}

function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
