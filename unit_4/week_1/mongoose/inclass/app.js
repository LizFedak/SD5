var express = require('express');
var app = express();
var mongoose = require('mongoose');

require('./models/db.js');

var Person = mongoose.model('Person');

var steve = new Person({
  firstname : true,
  lastname : "Johnson"
});

steve.save(function(err,person){
  if(err)return console.error(err);
  console.log("saved");
  console.log(steve);
});

// console.log(steve);


app.listen(3000, function(){
  console.log("In class example listening on 3000");
});