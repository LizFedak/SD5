var express = require('express');
var app = express();

var session = require('express-session');
var credentials = require('./credentials');

app.use(session({
	resave : false,
	saveUninitialized : false,
	secret : credentials.cookieSecret
}));

app.get('/login', function(req,res){
	req.session.user = {id : 1, username : 'Wombat'};
	res.send('Logged in');
});

app.get('/logout', function(req,res){
	req.session.user = null;
	res.send('Logged out');
});

app.get('/user', function(req,res){
	if (req.session.user) {
		res.send(req.session.user);
	} else {
		res.send('No user');
	}
})

app.listen(3000,function(){
	console.log('Session example listening on 3000');
});