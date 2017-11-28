### Using Sequelize Queries in Express
* Express routes behave asynchronously. So do Sequelize's queries. As you've seen, in order to use the information from an asynchronous function we must use callbacks. 
  
* Responding to HTTP requests with Sequelize data requires us to place the Sequelize query within the Express route handler (as this is the only place that the response object will be available).
  
```javascript
// in routes/user.js
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/users', function(req, res, next) {
  	models.User.findAll()
		.then(function(users) {
			res.json(users);
		});
});
```
  
* This is similar to the approach we used with `MySQL`.
  
* As your routes are located within the routes directory, and your Sequelize models are in the models directory, this is an excellent time to use `module.exports` to export the query methods you need in your controller.
  
```javascript
// controllers/user.js
var models = require('../models');
// Export a function 'index' that queries all users and responds with JSON

module.exports.index = function(req,res) {
	models.User.findAll()
		.then(function(users) {
			res.json(users);
		});
};
```
  
```javascript
// routes/user.js
var express = require('express');
var router = express.Router();
var User = require('../models/user'); // require the User exports

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.index(res);
});

module.exports = router
```
  
* If you wish you can seperate concerns even more by requiring the User model into a userDAO.js file, writing all of the queries and exporting them. Then you could include them in your controller.
  
#### Continue to [7 - Create Data with Sequelize](7_CreateData.md)
