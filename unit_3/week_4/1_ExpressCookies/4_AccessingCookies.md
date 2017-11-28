### Accessing Cookies
* Setting cookies is all well and good, but their real utility relies on accessing them. Luckily we can easily access the browser cookies from the request object.
  
* It is important to note that if you generically request just 'cookies' from the request object you will only receive the `unsigned` ie. unencrypted cookies:

```javascript
app.get('/allCookies', function(req, res) {
  res.send(req.cookies);
});
```
  
* If you would like to access the `signed` cookies. You will need to use the `signedCookies` property:  
  
```javascript
app.get('/allSignedCookies', function(req, res) {
  res.send(req.signedCookies);
});
```
  
* If you would like to access a specific cookie, you can access it from the `cookies` or `signedCookies` property by name:
  
```javascript
app.get('/oneSignedCookies', function(req,res) {
	res.send(req.signedCookies.testCookie);
});
```
  
#### Continue to [5 - Clear Cookies](5_ClearCookies.md)