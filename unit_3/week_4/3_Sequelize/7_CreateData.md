### Creating Data with Sequelize
* To insert a new instance of a model into the database, use the `Model.create(values,[options])` method.
  
```javascript
module.exports.create = function(req,res) {
	var user = req.body;
	models.User.create(user)
		.then(function(users){
			res.sendStatus(201);
		});
};
```
  
* In the above example the request object's body (which will be a user object) is passed to the `Model.create()` method, Sequelize then uses the Model definition to run an insert statement.
  
* The return from a successful insert will be the Instance that was created.
  
* In the above example, if the user is successfully inserted into the database, the server will respond with a `201: Created` status.
  
* In the following example, a `Promise.catch(onRejected)` is used to handle an error in the creation fo the user:
  
```javascript
module.exports.create = function(req,res) {
	var user = req.body;
	models.User.create(user)
		.then(function(users){
			res.sendStatus(201);
		})
		.catch(function(err){
			res.status(500);
			res.send(err);
			}
		});
};
```
  
  
#### Continue to [8 - Delete Data with Sequelize](8_DeleteData.md)