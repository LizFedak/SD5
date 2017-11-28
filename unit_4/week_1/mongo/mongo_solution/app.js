var express = require('express');
var app = express();
var bp = require('body-parser');
var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/test'

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

// #3
app.get('/names', function(req,res,next){
  Mongo.connect(dbURL, function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    students.distinct('name', function(err,names){
      if (err) return next(err);
      res.json(names);

      db.close();
    });
  });
});

// #4
app.get('/student', function(req,res,next){
  Mongo.connect(dbURL, function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    students.find({name : 'Jaclyn Morado'}, {scores : 1, _id : 0})
      .toArray(function(err,docs){
        // iterate over returned documents
        docs.forEach(function(val,ind,arr){
          // iterate over scores of each document
          val.scores.forEach(function(obj){
            // print out object values
            console.log(obj.type + " : " + obj.score);
          });
        });
        res.json(docs);

        db.close();
    });
  });
});

// #5
app.get('/scores', function(req,res,next){
  Mongo.connect(dbURL, function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    students.aggregate([
      // flatten scores array for all objects
      {$unwind : "$scores"},
      // only return scores
      {$project : 
        {scores: 1, _id: 0}
      }, 
      // sort in descending order
      {$sort : 
        {"scores.score" : -1}
      }
    ]).toArray(function(err,docs){
      if (err) return next(err);
      res.json(docs);

      db.close();
    });
  });
});

// 2:1
app.post('/create', function(req,res,next){
  // Lots of validation checking that data is correctly formed
  // 2:2
  var valid;
  valid = (typeof req.body.name === "string") ? true : false;
  if (!req.body.scores) {
    req.body.scores = [];
  }
  if (!(req.body.scores instanceof Array)) {
    res.status(422);
    return res.json({error: "Scores must be an array"});
  } else {
    req.body.scores.forEach(function(val,ind,arr){
      if ((typeof val.score !== 'number') &&
          (typeof val.type !== 'string')) {
        valid = false;
      }
    });
  }
  if (!valid) {
    res.status(422);
    return res.json({error: "Invalid datatypes"});
  }
  // perform insert
  Mongo.connect(dbURL,function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    students.insertOne(req.body, function(err,result){
      if (err) return next(err);
      res.sendStatus(201);

      db.close();
    });
  });
});

// 2:3
app.put('/addScore/:id', function(req,res,next){
  var valid = true;
  if ((typeof req.body.score !== 'number') &&
      (typeof req.body.type !== 'string')) {
    valid = false;
  }
  if (!valid) {
    res.status(422);
    return res.json({error: "Invalid datatypes"});
  }
  Mongo.connect(dbURL,function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    // NOTE: The _id is a number, req.params.id is a string
    students.updateOne({_id : parseInt(req.params.id)}, 
      {$push : { scores : req.body}}, function(err,result){
      if (err) return next(err);
      // if nothing is modified, response 404
      if (result.result.nModified < 1) {
        return res.sendStatus(404);
      }
      res.sendStatus(202);

      db.close();
    });
  });
});

// 2:4
app.delete('/destroy/:id', function(req,res,next){
  Mongo.connect(dbURL,function(err,db){
    if (err) return next(err);
    var students = db.collection('students');
    students.remove({_id : parseInt(req.params.id)}, function(err,result){
      if (err) return next(err);
      console.log(result)
      if (result.result.ok < 1 || result.result.n < 1) {
        return res.sendStatus(404);
      }
      res.sendStatus(202);

      db.close();
    });
  });
});

// 2:5
app.put('/changeName/:name',function(req,res,next){
  Mongo.connect(dbURL,function(err,db){
    if(err) return next(err);
    var students = db.collection('students');
    students.update({name : req.params.name}, {
      $set : {name : req.body.name}
    }, function(err,result){
      if (result.result.nModified < 1) {
        return res.sendStatus(404);
      }
      res.sendStatus(202);
    });
  });
});


app.use(function(req,res,next){
  res.sendStatus(404);
});

app.use(function(err,req,res,next){
  res.status(500);
  res.send(err);
});

app.listen(1337, function(){
  console.log('solutions listening on 1337');
});