### One-To-Many Associations
* One-to-many associations use the `Model.belongsTo(model)` and `Model.hasMany(model)` methods to define the relationship.
  
* Consider these models:
  
```javascript
// models/user.js
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

// models/task.js
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
  
* The above schema definitions indicate that a User will have a collection of tasks and that a Task will belong to one user (one-to-many)
  
* The optional `onDelete` and `foreignKey` options allow for additional configuration:
  * `onDelete` : is provided the value "CASCADE". This will ensure that if the corresponding User is deleted, all of the Tasks associated with the User will also be deleted.
  * `foreignKey` : is configured with the 'allowNull' property set to 'false'. This means that a new Task MUST be associated with a User when created.
  
* Below is an example of how to query all Users with their Tasks:
  
```javascript
module.exports.index = function(req,res){
	models.User.findAll({
		include : [{
			model : models.Task
		}]
	})
		.then(function(users){
			res.json(users);
		});
};
```
  
* Above, the `include` property dictates which (if any) associated models should be displayed.
  
* An example of how to create a new Task is:
  
```javascript
// assume POST /users/:id/tasks
module.exports.addTask = function(req,res){
	var task = req.body;
	task.UserId = req.params.id; // add the UserId to the Task

	models.Task.create(task) // create the Task
		.then(function(task){
			models.User.findById(req.params.id) // find the User
				.then(function(user){
					user.addTask(task) // add the task to the user
						.then(function(){
							res.json(user);
						})
				})
		})
};
```
  
#### Continue to [14 - Many to Many](14_ManyToMany.md)
