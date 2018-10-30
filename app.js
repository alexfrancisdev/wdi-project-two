const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');
const auth = require('./lib/auth');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));
app.use('*', auth.checkAuthStatus);
app.use(router);

mongoose.connect(env.dbUri);
app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
