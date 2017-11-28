### Delete Data with Sequelize
* To DELETE an existing instance with Sequelize, use the `Model.destroy(options)` method.
  
* `Model.destroy(options)` is actually capable of deleting multiple instances based on the options passed in to query, the example below assumes that a single deletion by `id` is desired:
  
```javascript
module.exports.destroy = function(req,res){
	var id = req.params.id;
	models.User.destroy({
		where : {
			id : id
		}
	});
};
```
  
* After deleting the instance, use promises to send either a success or error code back as a response:
  
```javascript
module.exports.destroy = function(req,res){
	var id = req.params.id;
	models.User.destroy({
		where : {
			id : id
		}
	})
	.then(function(bool){
		res.status(202); // Accepted
		res.send('Successfully deleted');
	})
	.catch(function(err){
		res.status(404);
		res.send('User not found');
	});
};
```
  
* Above the `202: Accepted` response is used to indicate that the `id` was located and the User deleted. If the User is not found, a `404: Not found` error is sent back
  
#### Continue to [9 - Update Data with Sequelize](9_UpdateData.md)
