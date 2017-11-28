### Setup
* The first step in using the Sequelize module is to install and save it to your project's 'package.json'. Additionally, Sequelize uses MySQL as a dependency so we will need that too:
  
```bash
> npm install --save sequelize sequelize-cli mysql
```
  
* The next step is to configure Sequelize's connection to the database. Sequelize provides a command-line utility (sequelize-cli) to assist with teh configuration process.
  
* Enter: 

```bash
> node_modles/.bin/sequelize init
```
  
* The above command will create several directories as well as an 'index.js' and a 'config.json' file:
  
```bash
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── package.json
└── seeders
```
  
##### 'models/index.js'
* 'models/index.js' is useful in that it pulls all of the models in the 'models' directory into a single exported object, making it easy to access them:
  
```javascript
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```
  
##### 'config/config.json'
* This file holds the configuration details for how to connect to databases given different environment variables:
  
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
  
* In order for this to work, you will need to update some of these values. At the moment you project will default to 'development', so update the 'development' object to connect to your database. Example:
  
```json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "sqlizedb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
  
* Create an 'app.js' file:
  
```bash
> touch app.js
```
  
* Require express as a dependency and invoke it.
  
```javascript
var express = require('express');
var app = express();
```
  
* Now require the 'models' directory, and synchronize the database:
  
```javascript
var express = require('express');
var app = express();

var models = require('./models');

models.sequelize.sync()
	.then(function(){
		console.log('Successfully synced db');
	})
	.catch(function(err){
		console.error(err);
	});
```
  
* The above code will synchronize the database with our application logic when app.js is run.
  
* The `sync()` function is asynchronous, to ensure that the database resources are configured before our server starts routing requests which rely on the database, place the `app.listen()` in the callback of the `sync()`:
  
```javascript
var express = require('express');
var app = express();

var models = require('./models');

models.sequelize.sync()
	.then(function(){
		console.log('Successfully synced db');
		app.listen(3000,function(){
			console.log('Application listening on port 3000');
		})
	})
	.catch(function(err){
		console.error(err);
	});
```
  
#### Continue to [3 - Create a Model](3_CreateAModel.md)