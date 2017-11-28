### POST,PUT,DELETE with Request
* Additional HTTP verbs can be used with Request, and Request provides convenience methods for them:
  * `Request.post(options,callback)`
  * `Request.put(options,callback)`
  * `Request.delete(options,callback)`
  
* To send data you will need to set the request headers in the options object:
  
```javascript
var request = require('request');

app.post('/signup', function(req,res){
	request.post({
		url : 'http://localhost:3000/users',
		headers : {
			'Content-type' : 'application/json'
		},
		json : {
			username : req.body.username,
			password : req.body.password
		}
	}, function(error,response,body){
		if (!error && response.statusCode == 201) {
			res.locals.flash = 'Thank you for signing up!'
			res.sendStatus(200);
		}
	});
});
```
  
* The above example will create a new User with the provided json, whenever a post route is sent to '/signup'. If the response code is 201 ('created'), it will store 'Thank you for signing up!' in the locals hash, and send a 200 status code.
  
#### Continue to [Labs](5_Labs.md)
