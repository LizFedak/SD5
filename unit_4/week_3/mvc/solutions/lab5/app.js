var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app_server/public'));
app.use(express.static(__dirname + '/app_client'));

app.get('/',function(req,res,next){
  res.sendFile('/app_server/views/index.html', {
    root : __dirname
  })
});

app.use(function(err,req,res,next){
  res.status(500);
  res.json({err:err});
});

app.listen(8080, function(){
  console.log("lab listening on 8080");
});