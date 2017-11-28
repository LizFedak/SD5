var express = require('express');
var app = express();
var credentials = require('./credentials');
var cookieParser = require('cookie-parser');
var bp = require('body-parser');
var session = require('express-session');

app.use(session({
	resave: false,
	saveUninitialized : false,
	secret: credentials.cookieSecret,
	key : "user"
}));

app.use(bp.json());

app.use(cookieParser(credentials.cookieSecret));

var cookie = require('./app_server/routes/cookie');

app.use('/cookie', cookie);

app.listen(3000, function(){
	console.log('Solution listening on 3000');
});