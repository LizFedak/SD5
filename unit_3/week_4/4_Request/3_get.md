### 'GET' With Request
* Get requests are extremely easy with Request:
  
```javascript
var request = require('request');

app.get('/members', function(req,res){
	request.get('http://localhost/users', function(error,response,body){
		if (!error) {
			res.json(body);
		} else {
			res.sendStatus(500);
		}
	})
})
```
  
* The very simple example above will take a request to the '/members' route in our application, and access the '/users' route from our API.
  
* All Requests are composed of options and a callback.
  
```javascript
request(options,callback);
```
  

#### Continue to [4 - POST,PUT,DELETE](4_post.md)