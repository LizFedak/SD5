# Reviewing User Creation with Encrypted Passwords
* Remember, we never want to store (or even know) a users plain text password. As such, we encrypt their passwords at creation.
  
* This is doubly true when using a login strategy with JWTs. We will be storing our JWTs on the browser in an encoded format, but remember `encoded != encrypted`. If we were taking our application all the way to enterprise production we would probably want to go a step further and use an MD5 encryption on our JWTs before storing them, but for now, just encrypting the password should be enough.
  
* *The true strength of encryption is that you can store data in plain sight*
  
* Below is how you could encrypt your user's passwords at creation with bcrypt.

```javascript
// app_api/controllers/userCtrl.js

var Mongo = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
const saltRounds = 15;
dbURI = 'mongodb://localhost:27017/tododb'

module.exports.create = function(req,res,next){
  Mongo.connect(dbURI, function(err,db){
    if (err) return next(err);
    var users = db.collection('users');
    // encrypt user password
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
      users.insert({
        username : req.body.username,
        password : hash
      }, function(err, result){
        if (err) return next(err);
        res.status(201);
        res.json(result);
        db.close();
      });
    });
  });
};
```
  
```javascript
var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/userCtrl');

router.post('/', ctrl.create)

module.exports = router;
```
