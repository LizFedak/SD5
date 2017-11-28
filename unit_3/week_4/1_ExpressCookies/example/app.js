var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var credentials = require('./credentials');

app.use(cookieParser(credentials.cookieSecret));

app.get('/', function(req,res){
	if (req.signedCookies.someCookie) {
		res.send(req.signedCookies);
	} else {
		res.cookie('someCookie', [1,2,3], {signed : true});
		res.send('Cookie set');
	}
});

app.get('/clear', function(req,res){
	if (req.signedCookies.someCookie) {
		res.clearCookie('someCookie');
		res.send('Cleared');
	} else {
		res.send('That cookie is undefined');
	}
});

app.get('/add', function(req,res){
	if (req.signedCookies.list){
		var list = req.signedCookies.list;
		list.push('new item');
		res.cookie('list', list, {signed : true});
		res.send(list);
	} else {
		var list = [];
		res.cookie('list', list, {signed : true});
		res.send(list);
	}
});


app.listen(3000,function(){
	console.log('Cookie Example listening on 3000');
});