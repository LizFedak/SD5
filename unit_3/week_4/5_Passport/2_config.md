### Configuration
* Ultimately Passport will require a substantial amount of configuration. In order to keep our 'app.js' as lean as possible, we will extract this configuration into it's own file.
  
1: At root level create a 'config' directory with a 'passportConfig.js' file within it:
  
```bash
> mkdir config
> touch config/passportConfig.js
```

  
2: In the 'passportConfig.js' file, require 'passport', and install the dependency:
  
  
```javascript
// config/passportConfig.js
var passport = require('passport');
```
  
```bash
> npm install --save passport
```
  
3: Now that you've required passport, require the 'passportConfig.js' directory in app.js, and mount it to the middleware with app.use as follows:
  
```javascript
// app.js
var express = require('express');
var app = express();
var passportConfig = require('./config/passportConfig');

app.use(passportConfig.initialize()); // initialize passport
app.use(passportConfig.session()); // restore state with authenticated session
```
  
4: Passport automatically tracks Users in session, as a result it has both 'cookie-parser' and 'express-session' as dependencies, require, configure and install both in app.js (don't forget to put a secret key in a 'credentials.js' file):
  
  
```javascript
// app.js
// ...passport config above
var cookie = require('cookie-parser');
var session = require('express-session');
var secret = require('./credentials').secret;

app.use(cookie(secret));

app.use(session({
	resave:false,
	saveUninitialized:false,
	secret: secret
}));
```
  
5: Choose a strategy (we will be using 'passport-local', install it's dependency and require it in 'congig/passportConfig.js':
  
  
```javascript
// config/passportConfig.js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
```
  
```bash
> npm install --save passport-local
```
  
6: Require your connection to the database. Passport requires that we check against existing User objects to verify username and password. This means we will need to query records. This example uses a simple user model with Sequelize:  
  
```javascript
// config/passportConfig.js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var models = require('../app_api/models');
```
  
7: Configure passport with an instance of the verification strategy. The strategy requires a single initializing argument, a function which will verify a user. The function will be passed the provided username, password, and a callback handler. The first argument of the callback should only be passed an error, the second argument requires a valid user object (or false):
  
```javascript
// config/passportConfig.js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var models = require('../app_api/models');

passport.use(new LocalStrategy(
	// verification function
	function(username,password,callback){
		// query the database for the user by username
		models.User.findOne({ // use findOne to return a single User
			where : {
				username : username
			}
		})
		.then(function(user){
			if (!user) {
				return callback(null,false); // no error, but not valid
			}
			if (user.password != password) {
				return callback(null,false); // no error, passwords don't match
			}
			return callback(null, user); // no error, user valid
		})
		.catch(function(err){
			return callback(err); // error
		});
	}));
```
  
  
8: Provide passport a way to serialize and deserialize user objects between requests. Assign some funciton to the `Passport.serializeUser()` and `Passport.deserializeUser()` methods to handle this:
  
  
```javascript
// config/passportConfig.js
// ...passport config

// serialize will be passed a user 'id' and store it in session
passport.serializeUser(function(user,callback){
	callback(null, user.id);
});

// deserialize will take the 'id' from the session and retrieve the user
// object from the database, making it available on the request object
// with req.user
passport.deserializeUser(function(id,callback){
	models.User.findById(id)
	.then(function(user){
		callback(null,user);
	})
	.catch(function(err){
		callback(err);
	});
});
```
  
9: Last but not least, export your (now configured) passport object from your 'config/passportConfig.js' so that it can be required in your app.js:
  
  
```javascript
// config/passportConfig.js
// ... passport config

module.exports = passport;
```
  
* Here is a complete example of the above files:
  * [config/passportConfig.js](config.js)
  * [app.js](app.js)
