### Setting Connection Defaults
* In the previous section we learned how to use the Heroku configuration variables to protect sensitive data.
  
* One draw back to the Heroku configuration variables is that they will only be provided to our application by Heroku when it is run in deployment.
  
* In order to run our application locally and not throw connection exceptions, we must provide defined values to use as defaults for our configuration:
  
```javascript
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USER || 'root',
  password : process.env.DB_PASS || 'root',
  database : process.env.DB_NAME || 'todo'
});
```
  
* The above example used the 'OR' operator (`||`) to assign default values for each fo the connection properties if the `process.env.VAR_NAME` is `undefined`. As those properties will not be injected by Heroku when we are running our app locally, we can rightfully assume that the database should access local resources instead of production resources.
  
#### Continue to [9 - Change Application Name](9_change_name.md)