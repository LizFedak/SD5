# CRUD Queries
* Now that we have reviewed how to create models and validate schema with Mongoose, it's time to put those models to use for our CRUD operations.
  
* The following is an overview of how to perform basic CRUD in the context of a controller.
  
* Keep the following schema in mind:

```javascript
var addressSchema = new mongoose.Schema({
  street : {type : String, "default" : "Street st."},
  city : {type : String, "default" : "Nowheresville"},
  state : {type : String, "default" : "ND"},
  zip : {type : String, "default" : "72804"}
});

var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  addresses : {type : [addressSchema], "default" : []}
});
```

### Create
```javascript
module.exports.create = function(req,res,next){
  var per = new Person({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
  });
  per.save(function(err,person){
    if (err) return next(err);
    res.status(201); // Created
    res.json(person); // send new person json
  });
};
```
### Read
```javascript
module.exports.index = function(req,res,next) {
  Person.find(function(err,people){
    if (err) return next(err);
    res.json(people);
  });
};

module.exports.show = function(req,res,next){
  Person.findOne({_id : req.params.id},
    function(err, person) {
      if (err) return next(err);
      res.json(person);
    });
};
```
### Update
```javascript
module.exports.update = function(req,res,next){
  Person.update({_id : req.params.id},
  req.body, // update with the body of the request
  function(err, result){
    if (err) return next(err);
    res.status(202); // Accepted
    res.json(result); // Send result object
    // {
    //   "ok": 1,
    //   "nModified": 1,
    //   "n": 1
    // }
  });
};
```
### Destroy
```javascript
module.exports.destroy = function(req,res,next){
  Person.find({_id : req.params.id})
    .remove(function(err, result){
      console.error(err);
      if (err) return next(err);
      res.status(202); // Accepted
      res.json(result); // Send result object
      // {
      //   "ok": 1,
      //   "n": 1
      // }
    })
};
```

### $push
Now we will create a route to add an address:  
  
```javascript
module.exports.add = function(req,res,next){
  // note different syntax
  Person.findByIdAndUpdate(
      // query id
      req.params.id,
      // update
      {
        $push : 
          {
            "addresses" : {
              street : req.body.street,
              city : req.body.city,
              state : req.body.state,
              zip : req.body.zip
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
      function(err, person) {
        if(err) return next(err);
        res.status(202); // Accepted
        res.json(person); // return updated doc
      }
    )
};
```

### $pull
Remove an address. We are still auto-generating `_id` fields for the address objects (notice how we didn't set `{_id : false}`).  
  
```javascript
module.exports.add = function(req,res,next){
  // note different syntax
  Person.findByIdAndUpdate(
      // query id -> this is the Person ID
      req.params.id,
      // update
      {
        $pull : 
          {
            "addresses" : {
              _id : req.body.address_id
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
      function(err, person) {
        if(err) return next(err);
        res.status(202); // Accepted
        res.json(person); // return updated doc
      }
    )
};
```
  
#### Continue to [labs](7_labs.md)