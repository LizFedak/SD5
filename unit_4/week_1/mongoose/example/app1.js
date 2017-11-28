// Node Example (not express)
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var ScoreSchema = mongoose.Schema({
  type: String,
  score: Number

  });

  var RecordSchema = mongoose.Schema({
    name : String,
    scores : [ScoreSchema]
    // specify existing collection...default is lowercased, pluaralize model name
  }, {collection : 'students'});

  var Record = mongoose.model('Record', RecordSchema);
  Record.find(function(err,records){
    if(err)return console.error(err);
    console.log(records[0]);
  })
});

