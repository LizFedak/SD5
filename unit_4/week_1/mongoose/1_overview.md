# Mongoose
### Overview
The Mongoose ODM provides a convenient solution to the problem of having to write so much validation code for your mongo databases.  
  
>Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.  
  
Instead of writing a massive conditional for every insert and update, you can use this dependency to make your life easier.
  

### What were we doing again...OH RIGHT! Schema.
* Mongoose allows you to write schema that ensures the data you enter into mongo conforms to some number of rules. Rather then using messy conditionals, mongoose allows us to use a schema object to dictate how our data must be structured:
```javascript
// From the Mongoose Docs
var kittySchema = mongoose.Schema({
    name: String
});
```
* In the above example, we are creating a new Schema and indicating that the property `name` must be of type `String`. We assign this Schema to a variable `kittySchema`
* With a schema in place, we can now create a new 'Model' for our `Kitten` class:
```javascript
var Kitten = mongoose.model('Kitten', kittySchema);
```
* As you can see, creating a model is very simple. The model gives us a class with which we can construct documents. In the above example, we have given our new model a name `Kitten` and a set of properties and behaviours (our Schema). With our model in place, we can create a new document from it.
```javascript
var fluffy = new Kitten({name : 'fluffy'});
```
* For the moment 'fluffy' is just an instance of a `Kitten`...it hasn't been persisted to our database. To save her, let's use the `.save()` method.
  * `.save()` takes an optional callback function as an argument, the callback function will be passed an error if one should bubble up.
```javascript
fluffy.save(function(err) {
  if (err) {
    return console.error(err);
  }
});
```
* Now our 'fluffy' `Kitten` is persisted in the database.
  
#### Continue to [setup](2_setup.md)