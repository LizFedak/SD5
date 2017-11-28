# Server Side Authentication with JSON Web Token
* When a user submits the login form, we will make a single asynchronous call to the server to authenticate the user's credentials.
  
* If the user is authenticated, we will generate and return an encoded JWT to the client for it to store and reference.
  
* Below is an example of how this can be accomplished:  

```javascript
// app_server/controllers/loginCtrl.js

var Mongo = require('mongodb').MongoClient;
var dbURI = 'mongodb://localhost:/27017/tododb'
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var secret = require('../../.credentials.js').secret;
if (process.env.NODE_ENV == 'production'){
  secret = process.env.SECRET;
}

module.exports.authenticate = function(req,res,next) {
  // 1. Connect to database
  Mongo.connect(dbURI, function(err,db){
    if(err) return next(err);
    var coll = db.collection('users');
    // 2. Find user by username
    coll.findOne({username : req.body.username}, function(err,user){
      if (err) return next(err);
      // 3. Compare provided (plain text) password
      // with the encrypted one stored in the db
      bcrypt.compare(req.body.password, user.password, function(err,result){
        if (err) return next(err);
        if (!result) {
          res.status(401);
          res.json({error : "Incorrect password"});
        }
        if (result) {
          res.status(200);
          // 4. Generate a JWT (below), return to client
          res.json({token : generateJwt(user)})
        }
      })
    })
  })
};

// Helper for JWTs
var generateJwt = function(user) {
  // Set JWT to expire after 24 hours
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 1);

  // Encode JWT with user data
  return jwt.sign({
    id : user._id,
    email : user.email,
    username : user.username,
    exp : parseInt(expiry.getTime() / 1000)
  }, secret);
}
```
  
```javascript
// .credentials.js

module.exports = {
  secret : "wombat"
}
```
  
```javascript
// app_server/routes/loginRoutes.js

var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/loginCtrl');

router.post('/', ctrl.authenticate);

module.exports = router;
```
  
#### Continue to [Creating an AngularJS Authentication Service](4_client_authentication_service.md)