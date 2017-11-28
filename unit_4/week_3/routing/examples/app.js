var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res,next){
  res.sendFile('index.html', {
    root: __dirname
  })
})

app.listen(3000,function(){
  console.log('example running on 3000')
})