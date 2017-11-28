var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.json());

var models = require('./app_api/models');

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





