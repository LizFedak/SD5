var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use(express.static(__dirname + '/app_server/public'));
app.use(express.static(__dirname + '/app_client'));

app.use('/', require('./app_server/routes/main'));
app.use('/todos', require('./app_api/routes/todoRoutes'));

app.use(function(err,req,res,next){
  res.status(500);
  res.json({err:err});
});

app.listen(3000, function(){
  console.log("lab listening on 3000");
});