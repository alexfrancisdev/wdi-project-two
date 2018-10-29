const express = require('express'); // Access the express package
const app = express();
app.use(express.static('public'));

const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
app.set('view engine', 'ejs');
app.use(expressLayouts);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const session = require('express-session');
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));

const mongoose = require('mongoose');
const env = require('./config/environment');
mongoose.connect(env.dbUri);

const router = require('./config/routes');

const auth = require('./lib/auth');
app.use('*', auth.checkAuthStatus);
app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
