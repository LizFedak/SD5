### Update Data
* To UPDATE an existing instance with sequelize, you can use the `Model.upsert(values,{options})` method.
  
* `Model.upsert(values,{options})` will insert or update a single row in your table. The row will be updated if the primary key from the supplied object matches the primary key in the table. If no match is found, a new instance will be created instead.
  
```javascript
module.exports.update = function(req,res){
	var updatedUser = req.body;
	models.User.upsert(updatedUser)
		.then(function(bool){
			console.log(bool);
			res.sendStatus(202); // Accepted
		});
};
```
  
* The above example takes an object (i.e. `{id : 1, fname : 'NewName!!!!'}`) which contains a primary key (so that it can find the one to update).
  
* Once the update has completed, a `202: Accepted` response is sent to indicate that the operation has occured.
  
#### Continue to [Appendix A: Express API Pattern](Appendix_A.md)