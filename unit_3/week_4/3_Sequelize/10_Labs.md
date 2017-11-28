### Labs
* These labs will aid you in practicing both the use of and configuration of sequelize and the construction of a RESTful API. The first several steps are a guide to get you started. Your job is to finish.

#### 1. Setup and Dependencies
* Make a file folder for your project, and install express:
  
```bash
> mkdir my-project
> cd my-project
> npm init
> npm install --save express
```
  
* Add Sequelize, Sequelize CLI, and MySQL to the application:
  
```bash
> npm install --save sequelize sequelize-cli mysql
```
  
* Use the sequelize-cli generator to setup the ORM:
  
```bash
> node_modules/.bin/sequelize init
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
  
### 2. 'app.js'
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

### 3. Models
* Create all model definitions in the 'models' directory
  
* The file naming convention is the singular lowercased name of the model. (i.e. User => user.js, Todo => todo.js)
  
* Create a 'user.js' file and define a User model within it:
  
```bash
> touch models/user.js
```
  
* Now create the model inside of an exported function. This function will be called auto-magically by 'index.js' and added to the list of models it makes available:
  
```javascript
// In models/user.js

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username : DataTypes.STRING,
		password : DataTypes.STRING
	}, {
		classMethods: {
			associate : function(models) {
				User.hasMany(models.Task)
			}
		}
	});

	return User;
}
```
  
* The above model ('User'), denotes a 'hasMany' relationship with a model named 'Task', let's create Task now.
  
```bash
> touch models/task.js
```
  
```javascript
// In models/task.js
module.exports = function(sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		title : DataTypes.STRING
	}, {
		classMethods: {
			associate : function(models) {
				Task.belongsTo(models.User, {
					onDelete : "CASCADE",
					foreignKey : {
						allowNull : false // must be associated
					}
				});
			}
		}
	});

	return Task;
}
```
  
### 4. Creating and Testing an API
* Next we will create a RESTful API to perform crud operations on Users and Tasks.
  
* To keep the API seperate from the application logic, we will create an 'app_api' directory at the root level of the application:
  
```bash
> mkdir app_api
```
  
* Now move all of the directories associated with the API into the 'app_api' directory.
  
```bash
mv config app_api/
mv models app_api/
```
  
*  Finally adjust the path to the models directory in 'app.js':
  
```javascript
// app.js

var express = require('express');
var app = express();

var models = require('./app_api/models');

models.sequelize.sync()
// ...
```
  
* To test the models we will create several RESTful routes to provide data over our API.
  
* Create a 'routes', and a 'controllers' directory:
  
```bash
mkdir app_api/routes
mkdir app_api/controllers
```
  
* Next create a 'user.js' file in both of the directories:
  
```bash
touch app_api/routes/user.js
touch app_api/controllers/user.js
```
  
* In 'controllers/user.js' create method stubs for full crud:
  
```javascript
module.exports.create = function(req,res){};
module.exports.index = function(req,res){};
module.exports.show = function(req,res){};
module.exports.update = function(req,res){};
module.exports.destroy = function(req,res){};
```
  
* Require the 'controllers/user.js' file in the 'routes/user.js' file, then stub out the routes:
  
```javascript
var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.destroy);

module.exports = router;
```
  
##### Create
* To begin, we will make a 'create' method. In 'controllers/user.js', require the models directory, and write the method:
  
```javascript
// controllers/user.js
var models = require('../models')

module.exports.create = function(req,res){
	var user = req.body;
	models.User.create(user)
		.then(function(user){
			res.sendStatus(201);
		})
		.catch(function(err){
			res.status(500);
			res.send('InternalServerError: User not created');
		});
};

// ...
```
  
* In order to use the request object's body, you will need to require 'body-parser'
  
```bash
> npm install --save body-parser
```

```javascript
// in app.js
var bp = require('body-parser');
```
  
* In order to test this create method, require the 'app_api/routes/user.js' file in 'app.js' and set the base url to '/users'
  
```javascript
// app.js

var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.urlencoded({extended : false}));
app.use(bp.json());

var models = require('./app_api/models');

var users = require('./app_api/routes/user');

app.use('/users', users);

models.sequelize.sync()
  .then(function(){
    console.log('Successfully synced db');
    app.listen(3000,function(){
      console.log('Application listening on port 3000');
    });
  })
  .catch(function(err){
  	console.log(err);
  });
```
  
* Now use Postman to create a User. Select the 'POST' method to the url 'http://localhost:3000/users'. In the 'Body' tab, select 'raw', and 'JSON(application/json)', and enter:
  
```json
{
    "username" : "admin",
    "password" : "admin"
}
```
  
* Click 'Send', and a new User should be created.
  
### ASSIGNMENTS!
#####Users
1: Create an 'index' route for Users which returns json of all of the User models
  

2: Create a 'show' route for Users which will return a single Users json based on ID
  
  
3: Create an 'update' route for Users which will update a specific User by ID with the information provided in the body
  
  
4: Create a 'destroy' route for Users which will delete a User by ID
  
#### Continue to [11 - Associations](11_Associations.md)