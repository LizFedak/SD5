### Authenticate Requests
* Passport provides an `Passport.authenticate()` function, which is used as route middleware to authenticate requests.
  
```javascript
router.post('/login',
	passport.authenticate('local',
		{
			failureRedirect : '/login'
		}),
		function(req,res){
			res.redirect('/');
		});
```
  
* The above route will be passed a user object:
  
```json
// example
{
	"username" : "admin",
	"password" : "admin"
}
```
  
* The authenticate method will pass the `username` and `password` to the verification function you created in the strategy. If successful, authenticate will route fall through to the callback function, otherwise it will redirect to the designated 'failureRedirect'
  
* If a user is successfully authenticated, the user object will be made available in the request object under the 'user' property:
  
```javascript
	router.get('/', function(req,res){
		res.send(req.user); // { id : 1, username : 'admin', password : 'admin'}
	});
```
  
* Alternatively, you can create you own custom callback function to handle the success or error of authenticate:
  
```javascript
// in a route
router.post('/login', function(req,res,next){
	// pass a callback as the second argument to `Passport.authenticate()`
	passportConfig.authenticate('local', function(err,user,info){
		// if there is an error or no user, send 401
		if (err || !user) {
			return res.sendStatus(401);
		}
		// otherwise, login the user
		req.login(user,function(err){
			return res.send('../');
		});
		// inject dependencies into the module
	})(req,res,next);
});
```
  
#### Continue to [5 - Logout](5_logout.md)
