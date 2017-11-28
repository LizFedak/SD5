### Adding and Accessing Sessions
* Unlike cookies, with sessions we only need to access the request object. Below, when the '/login' route is navigated to a `user` session is created and set equal to the value "Wombat". Because we are using the cookie secret for our sessions this value will be encrypted on the browser.
  
```javascript
app.get('/login', function(req,res){
	req.session.user = 'Wombat';
	res.render('index');
});
```
  
* Similarily, if we want to access and make a change to the value associated with our session, we access it on the request object:
  
```javascript
app.get('/logout', function(req,res){
	req.session.user = null;
	res.render('index');
});
```
  
* By default the session will be stored on the browser as `connect.sid`, but this can be configured with the options object passed when we add it as middleware to our application.
  
```javascript
app.use(session({
	resave : false,
	saveUninitialized : false,
	secret : credentials.cookieSecret,
	key : 'user'
}));
```
  
#### Continue to [4 - Clearing Sessions](4_ClearingSessions.md)