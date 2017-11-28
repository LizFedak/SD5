### Querying Data with Sequelize
* Sequelize has a number of methods for querying data. [The Model API docs][modelAPI] define all fo them, we will focus on two `Model.findAll({options})` & `Model.findById(id, {options})`
  
* To query a list of all records of any one Model, use the `Model.findAll({options})` method.
  
* `Model.findAll({options})` returns an array of instances of the queried model objects.
  
* The optional `{options}` object passed as an argument can specify additional query constraints, things like 'WHERE', 'OR' and 'AND'.
  
```javascript
User.findAll(); // Return ALL users

User.findAll({ // Return a subset of users
	where : { 
		fname : 'Andrew',
		$or : [					// or syntax
			{ id : {lt : 5}} 	// less than syntax
		]
	}
});
```
  
* The `Model.findAll({options})` method is ideal for an 'index' route in an API.
  
* Here is a full list of options to include with queries:
  
```javascript
$ne, $in, $not, $notIn, $gte, $gt, $lte, $lt, $like, $ilike/$iLike, 
$notLike, $notILike, '..'/$between, '!..'/$notBetween, '&&'/$overlap, 
'@>'/$contains, '<@'/$contained
```
  
* `Model.findById(id, {options})` returns a single instance of the queried model.
  
```javascript
User.findById(1); // find the User with id 1
```
  
* The `Model.findById(id,{options})` method is ideal for a 'show' route in an API.



#### Continue to [5 - Using Queried Data with Promises](5_UsingQueriedData.md)

[modelAPI]:http://docs.sequelizejs.com/en/latest/api/model/