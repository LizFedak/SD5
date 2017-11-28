### Encrypt Passwords
* You really don't want to know/store a user's password. As soon as they enter it, you want to use an encryption strategy to store an encrypted hash in your database.
  
* bcrypt makes this easy!
  
1: Install bcrypt:
  
  
```bash
> npm install --save bcrypt
```
  
2: Require bcrypt where you create a User:
  
```javascript
// app_api/controllers/users.js
var bcrypt = require('bcrypt');
```
  
3: Set the number of saltRounds to use.
  * Salt rounds are the number of iterations of encryption bcrypt will use. Obviously...more is better, but there is a tradeoff in time. Salt rounds are exponential, the current recommended number of rounds for current technology is AT LEAST 10...but 13 is better.
  
```javascript
// app_api/controllers/users.js
var bcrypt = require('bcrypt');
const saltRounds = 13;
```
  
4: Use the `bcrypt.hash(rawPassword,saltrounds,callback)` method to hash the password. The returned hash, should be persisted as the password:

```javascript
module.exports.create = function(req,res) {
	var user = req.body;
	var rawPassword = user.password;

	bcrypt.hash(rawPassword, saltRounds, function(err,hash){
		models.User.create({
			username : user.username,
			password : hash
		})
			.then(function(user) {
				res.sendStatus(201);
			})
			.catch(function(err) {
				res.status(500);
				res.send('InternalServerError: User not created');
			});	
	
	});
};
```
  
* Thats it! So easy!
  
#### Continue to [3 - Compare Passwords](3_compare.md)
