### `cookie-parser` Configuration
* Install the module:
  
```bash
> npm install --save cookie-parser
```

* Require the dependency:
  
```javascript
var cookieParser = require('cookie-parser');
```
  
* Create a `credentials.js` script file and export a secret key:
  
```javascript
module.exports = {
    cookieSecret: "banana"
};
```
  
* Be sure to add your `credential.js` file to your `.gitignore`.
  
* Require the secret, and set your application to use the cookie-parser middleware passing in the secret as an argument.
  
```javascript
var credentials = require('./credentials.js');

app.use(cookieParser(credentials.cookieSecret));
```
  
#### Continue to [3 - Adding Cookies](3_AddingCookies.md)