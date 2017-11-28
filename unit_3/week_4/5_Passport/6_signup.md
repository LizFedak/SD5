### Sign Up
* When a user signs up (creates an account), you will likely want to log them in. This prevents them from having a negative experience resulting from being required to login after signing up.
  
* Passport provides another convenience method on the request object `req.login(user,callback)` which makes this process easy.
  
```javascript
router.post('/signup', function(req,res){
	// create the user in the database
	models.User.create(req.body)
		.then(function(user){
			// pass the returned user object to `login()`
			req.login(user,function(err){
				if (err) {
					return next(err);
				}
				return res.send(user);
			});
		})
		// catch any creation errors
		.catch(function(err){
			res.status(500);
			res.send(err);
		})
});
```
  
* Now the user will be signed up and signed in. Instead of just sending the user object back (as the example above is doing), you can redirect or render a view.
  
#### Continue to [7 - Labs](7_Labs.md)