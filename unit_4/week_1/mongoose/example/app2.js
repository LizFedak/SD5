// Express example
var express = require('express');
var app = express();
var bp = require('body-parser');
// MUST --> require db so that everything is configured
require('./app_api/models/db');

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use('/employees', require('./app_api/routes/employeeRoutes'));

app.use(function(err,req,res,next){
  res.status(500);
  res.send(err);
})

app.listen(3000, function(){
  console.log('app2 listening on 3000');
});