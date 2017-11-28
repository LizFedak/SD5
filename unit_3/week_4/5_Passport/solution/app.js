var express = require('express');
var app = express();
var cookie = require('cookie-parser');
var session = require('express-session');
var secret = require('./credentials').secret;
var passportConfig = require('./config/passportConfig');
var bp = require('body-parser');
var handlebars = require('express-handlebars');

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(cookie(secret));

app.use(session({
	resave:false,
	saveUninitialized:false,
	secret: secret
}));

app.set('views', 'app_server/views');
app.engine('handlebars', handlebars({
	defaultLayout : '../../app_server/views/layouts/main'
}));
app.set('view engine', 'handlebars');

app.use(passportConfig.initialize());
app.use(passportConfig.session());

var models = require('./app_api/models');

app.use('/', require('./app_server/routes/loginRoutes'));
app.use('/users', require('./app_api/routes/userRoutes'));

models.sequelize.sync()
	.then(function(){
		console.log('successfully synced db');
		app.listen(3000, function(){
			console.log('listening on 3000');
		});
	})
	.catch(function(err){
		console.error(err);
	});





