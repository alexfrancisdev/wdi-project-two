const router = require('express').Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

// HOME route
router.get('/', function(req, res) {
  res.render('home');
});

// INDEX Route
router.get('/posts', postController.indexRoute);

// SHOW Route
router.get('/posts/:id', postController.showRoute);

module.exports = router;
