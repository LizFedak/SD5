### Compare Passwords
* In order to compare a plain text password against the encrypted one in the database, you need to use the `bcrypt.compare(rawPassword,hash,callback)` method
  
* This method will asynchronously return either an error, or a result. The result is a boolean which will be false if the passwords do not match and true if they do. Add this compare to the verification function passed to your passport strategy:
  
```javascript
passport.use(new LocalStrategy(
	function(username,password,callback){
		models.User.findOne({ 
			where : {
				username : username
			}
		})
		.then(function(user){
			if (!user) {
				return callback(null,false); 
			}

			// replace the previous password comparison with this
			bcrypt.compare(password,user.password,function(err,result){
				if (err || !result) {
					return callback(null,false);
				}
				return callback(null, user); 
			});

		})
		.catch(function(err){
			return callback(err); 
		});
	}));
```
  
#### Continue to [Labs](4_labs.md)