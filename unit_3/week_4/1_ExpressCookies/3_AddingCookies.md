### Adding Cookies
* Cookies are cached by the browser, as such, you will need to attach the cookie to the response object.
  
* When the route below is reached, a new cookie object (named 'testCookie') is assigned to the response object. We pass the key-value pair(s) to store in the cookie, and finally a json object with the property `signed` set to the value `true`. This last one will ensure that our cookie is encrypted in browser storage using the secret key we set in our `credentials.js`.
  
```javascript
app.get("/signed", function(req,res){
	res.cookie('testCookie', {test : "test"}, {signed : true});
	res.render('index');
});
```
  
* If we don't want to encrypt our cookie we can omit the `signed` object (but don't do this).
  
```javascript
app.get("/unsigned", function(req,res){
	res.cookie('unsignedCookie', {test : "test"});
	res.render('index');
});
```
  
* **KEY TAKE AWAY**: Cookies are set on the 'response' object's 'cookie' property.
  
#### Continue to [4 - Accessing Cookies](4_AccessingCookies.md)