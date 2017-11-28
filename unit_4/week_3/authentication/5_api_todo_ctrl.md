# Protect API Routes with Custom Authentication Middleware
* with the client configured to store/retrieve a JWT, we can protect the server data from unauthenticated requests. 
  
* To ensure that only users who have successfully logged in to our application can access our data, we will create an authentication method which confirms they are who valid users, and mount it with middleware to our todo router, ensuring that users who are not authenticated will not have access to our todo routes.
  
* Consider the following:


```javascript
// app_api/controllers/todoCtrl.md

var Mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var dbURI = 'mongodb://localhost:27017/tododb'

var secret = process.env.SECRET || require('../../.credentials').secret
var jwt = require('jsonwebtoken');

module.exports.jwtAuthenticator = function(req,res,next){
  // 1. Store the value of the 'x-access-token' header
  // in a variable
  var token = req.headers['x-access-token'];
  // 2. If the token is defined...
  if (token) {
    // 3. Use the 'jsonwebtoken' packages verify method
    jwt.verify(token, secret, function(err,decoded){
      // 4. If there is an error, or the decoded token is 
      // not defined respond 401
      if(!decoded || err) {
        res.status(401);
        return res.json({
          success : false,
          message : 'Failed to authenticate token'
        });
      } else {
      // 5. If all goes well, store the decoded JWT in a
      // 'payload' property on the request (in case we need it later)
      // call 'next()' to move to the next middleware function
        req.payload = decoded;
        next();
      }
    })
  } else {
  // 6. If the token was undefined...
    res.status(401)
    res.json({
      success : false,
      message : 'No token provided'
    });
  }
};

// CRUD methods excluded for brevity
```
  
```javascript
var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/todoCtrl');

// authenticate user! (make sure this comes before your routes)
router.use(ctrl.jwtAuthenticator);

router.get('/', ctrl.index);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.destroy);
router.post('/', ctrl.create);

module.exports = router;
```
  
#### Continue to [Updating Todo Service with Authentication Headers](6_client_todo_service.md)