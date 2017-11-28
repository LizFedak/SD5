var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

module.exports.index = function(req,res,next) {
  Employee.find(function(err,employees){
    if (err) return next(err);
    // Send data back
    res.json(employees);
  });
};

module.exports.create = function(req,res,next){
  var emp = new Employee({
    name : req.body.name,
    email : req.body.email,
    salary : req.body.salary,
    accounts : req.body.accounts,
    awards : req.body.awards
  });
  emp.save(function(err,record){
    if (err) return next(err);
    res.status(201);
    res.json(emp);
  });
};

module.exports.update = function(req,res,next){
  Employee.update({_id : req.params.id},
  req.body,
  function(err, result){
    if (err) return next(err);
    res.status(202);
    // Send result object
    res.json(result);
    // {
    //   "ok": 1,
    //   "nModified": 1,
    //   "n": 1
    // }
  });
};

module.exports.show = function(req,res,next){
  Employee.findOne({_id : req.params.id},
    function(err, employee) {
      if (err) return next(err);
      res.json(employee);
    });
};

module.exports.destroy = function(req,res,next){
  Employee.find({_id : req.params.id})
    .remove(function(err, result){
      console.error(err);
      if (err) return next(err);
      // Send result object
      res.json(result);
      // {
      //   "ok": 1,
      //   "n": 1
      // }
    })
};

// This example is hard coded
module.exports.add = function(req,res,next){
  console.log(req.params.id)
  // note different syntax
  Employee.findByIdAndUpdate(
      // query id
      req.params.id,
      // update
      {
        $push : 
          {
            "accounts" : {
              accountNumber : 1898,
              customer : "Google"
            }
          }
      },
      // options
      {
        safe : false, // write concern, slower if false, but safer
        upsert : false, // create new doc if none matches query (false, so don't)
        new : true // return updated document after $push
      },
      // callback
      function(err, employee) {
        if(err) return next(err);
        res.status(202); // Accepted
        res.json(employee); // return the updated obj
      }
    )
};

// This example is hard coded
module.exports.remove = function(req,res,next){
  // note different syntax
  Employee.findByIdAndUpdate(
      // query id
      req.params.id,
      // update
      {
        $pull : 
          {
            "accounts" : {
              _id : "57639aa70a1ae4e3113f93a5"
            }
          }
      },
      // options
      {
        safe : false, // write concern, slower if false, but safer
        upsert : false, // create new doc if none matches query (false, so don't)
        new : true // return updated document after $push
      },
      // callback
      function(err, employee) {
        if(err) return next(err);
        res.status(202); // Accepted
        res.json(employee); // return the updated obj
      }
    )
};