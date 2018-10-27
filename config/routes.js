const router = require('express').Router();
const authController = require('../controllers/authController');

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

router.get('/', function(req, res) {
  res.render('home');
});

module.exports = router;
