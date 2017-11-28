### `process.env`
* When Heroku uses the provided 'Procfile' to start the application it passes in the configuration variables you have set as additional arguments.
  
* The configuration variables provided by Heroku become properties with their associated values, stored within the Node `process.env` object.
  
* Here is an example of the default `process.env` object:
  
```javascript
{ TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node' }
```
  
* `process` is a property on the global Node object, so inside of you application you can access `process.env` by name. As `env` is an object, you can also access any of it's properties:
  
```javascript
process.env.USER; // => 'maciej'
```
  
* This means that any of the Heroku config variables stored within the `env` object can be accessed as well and used for our configuration. Allowing us to do things like configure a MySQL server connection without exposing any of our sensitive data: 
  
```javascript
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});
```
  
* In the above example, Heroku will pass the deployed application configuration variables which correspond to each of these `env` properties (because we used `heroku config:set VAR_NAME='some_value'` to store those variables). **NOTE**: When run locally, these values will not be passed by Heroku.

  
#### Continue to [8 - Configuring Default Connections](8_default_connections.md)