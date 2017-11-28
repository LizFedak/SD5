### `belongsTo` & `hasOne`
* Both `belongsTo` and `hasOne` are used to establish One-To-One associations between two models connected by a single foreign key
  
#### `belongsTo`
* `Model.belongsTo(OtherModel)` is used when the foreign key for the one-to-one relation exists on the **source model** (i.e. the model that the function is being invoked on)
  
```javascript
// configuration excluded for brevity

var Company = db.define('company', {
	id : {
		// configuration
	} // etc etc
});

var Product = db.define('product', {
	id : {
		// configuration
	} // etc etc
});

Product.belongsTo(Company); // Adds a companyId property
// to the Product to hold the primary key value for the Company
```
  
* By default the foreign key of a `belongsTo` relation will be generated from the target model name and the target primary key name (i.e. `companyId`), and by default will be camelCased.
  
#### `hasOne`
* `Model.hasOne(otherModel)` is used when the foreign key for the one-to-one relations exists on the **target model** (i.e. the model that is passed as an argument)
  
```javascript
var User = db.define('user', {
	id : {
		// config
	}
});

var Profile = db.define('profile', {
	id : {
		// config
	}
});

User.hasOne(Profile); // Adds an userId property to the 
// Profile model, the foreign key will be placed on the 
// User table
```
  
#### Create Associated Objects
* To create static data with an association, nest the associated model object in a property of the lowercased model's name, and pass a second options object argument with an 'include' property specifiying the included object(s):
  
```javascript
// above code implied
User.create({
	name : "Bob Dobbs",
	profile : { // Add the profile property and values
		color : "blue"
	}
}, {
	include : [ Profile ] // Use the option object to 
	// include 'include' the associated model
});
```
  
#### Accessing Associated Models
* `Model.getAssociation()`
* Once an association is created a source model can access the models associated with it by an auto-generated get method.
* By default the method will be the word 'get' followed by the target models name with a capitalized first letter.
  
```javascript
User.create({
	name : "Bob Dobbs",
	profile : { 
		color : "blue"
	}
}, {
	include : [ Profile ] 
});

User.findById(1)
  .then(function(user) {
  	user.getProfile() // Returns a Promise
  	  .then(function(profile){
  	  	console.log(prof); // When the promise returns print out the Profile object
  	  })
  });
```
  
#### Continue to [13 - One-To-Many Associations](13_OneToMany.md)