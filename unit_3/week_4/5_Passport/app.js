var express = require('express');
var app = express();
var cookie = require('cookie-parser');
var session = require('express-session');
var secret = require('./credentials').secret;
var passportConfig = require('./config/passportConfig');
var models = require('./app_api/models');

app.use(bp.json());

app.use(cookie(secret));

app.use(session({
	resave:false,
	saveUninitialized:false,
	secret: secret
}))

app.use(passportConfig.initialize());
app.use(passportConfig.session());

models.sequelize.sync({force : true})
	.then(function(){
		console.log('db sync success');
		app.listen(3000,function(){
			console.log('Passport Example listening on 3000');
			models.User.create({
				username : 'admin',
				password : 'admin'
			})
			.then(function(){
				console.log('User created successfully');
			})
		});
	});