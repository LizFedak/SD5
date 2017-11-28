### `express-session` Configuration
* Install and require the `express-session` dependency:
  
```bash
npm install --save express-session
```
  
```javascript
var session = require('express-session');
```
  
* Set the session middleware:
  
```javascript
app.use(session({
	resave : false,
	saveUninitialized : false,
	secret : credentials.cookieSecret
}));
```
  
#### Continue to [3 - Adding & Accessing Sessions](3_AddingAccessingSessions.md)