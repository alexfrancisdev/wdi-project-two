const router = require('express').Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');

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

// NEW Route
router.get('/posts/new', postController.newRoute);
router.post('/posts', postController.createRoute);

// SHOW Route
router.get('/posts/:id', postController.showRoute);

// UPDATE route
router.put('/posts/:id', postController.updateRoute);

// EDIT route
router.get('/posts/:id/edit', postController.editRoute);

// DELETE Route
router.delete('/posts/:id', postController.deleteRoute);

// Comment CREATE route
router.post('/posts/:postId/comments', commentsController.createRoute);

// Comment DELETE route
router.delete('/posts/:postId/comments/:commentIs',commentsController.deleteRoute);

module.exports = router;
