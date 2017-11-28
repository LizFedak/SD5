### Logout
* Passport makes logging a user out extremely convenient.
  
* Passport adds a convenience method to the request object `req.logout()`. `req.logout()` removes the user session, thus setting the user on the request object to undefined.
  
```javascript
router.get('/logout', function(req,res){
	req.logout();
	res.render('index');
});
```
  
#### Continue to [6 - Sign Up](6_signup.md)