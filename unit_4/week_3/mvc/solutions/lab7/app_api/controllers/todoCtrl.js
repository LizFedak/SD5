var Mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var dbURI = 'mongodb://localhost:27017/tododb'

module.exports.index = function(req,res,next){
  Mongo.connect(dbURI, function(err,db){
    if (err) return next(err);
    var todos = db.collection('todos');
    todos.find({}).toArray(function(err,docs){
      if (err) return next(err);
      res.json(docs);
    });
  });
};

module.exports.destroy = function(req,res,next){
    Mongo.connect(dbURI, function(err,db){
    if (err) return next(err);
    var todos = db.collection('todos');
    todos.removeOne({_id : ObjectId(req.params.id)}, function(err,result){
      if (err) return next(err);
      res.status(202);
      res.json(result);
    });
  });
};

module.exports.update = function(req,res,next){
    Mongo.connect(dbURI, function(err,db){
    if (err) return next(err);
    var todos = db.collection('todos');
    todos.findOneAndUpdate(
      {_id:ObjectId(req.params.id)},
      {
        task : req.body.task,
        completed : req.body.completed
      },
      {returnOriginal : false},
      function(err,result){
      if (err) return next(err);
      res.status(202);
      res.json(result);
    });
  });
};

module.exports.create = function(req,res,next){
    Mongo.connect(dbURI, function(err,db){
    if (err) return next(err);
    var todos = db.collection('todos');
    todos.insertOne(req.body, function(err,doc){
      if (err) return next(err);
      res.status(201);
      res.json(doc);
    });
  });
};
