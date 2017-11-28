var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/image/:img', function(req, res){
  var fileName = req.params.img + ".jpg";

  res.sendFile(fileName,
    {root : __dirname + '/public/images'},
    function(err){
      if(err){
        res.send('No such image');
      }
    });
});

//custom 404
app.use(function(req, res){
      res.status(404);
      res.send('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});

//Configure app to listen on port 3000
app.listen(3000, function(){
      console.log('API app started on http://localhost:' + 3000 + '; press ctrl-c to terminate.');
});
