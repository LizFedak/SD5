### Adding Data to an existing Cookie
* The previous class found it useful to access and update existing cookies (like adding values to an array)
  
* The logic to do so entails, checking that the cookie exists, accessing the current value, updating it, and then resetting the cookie.
  
* The following example illustrates how this can be done:
  
```javascript
app.get('/add', function(req,res){
	var list = [];
	if (req.signedCookies.list){
		list = req.signedCookies.list;
		list.push('new item');
		res.cookie('list', list, {signed : true});
		res.send(list);
	} else {
		res.cookie('list', list, {signed : true});
		res.send(list);
	}
});
```
  
#### Continue to [Labs](7_Labs.md)