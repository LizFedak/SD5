# Making Schema Better with Validation
* At the moment our schema isn't doing much more than typing our data. Mongoose is capable of much more, you can assign defaults, require fields not be null, and set minimums and maximums.
  
* Will will discuss some of the default validators available, Mongoose also allows you to create custom validators (more on that [here][cust]).
  
##### `default`
To assign a default value to the schema, we configure the field with an object:
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {type : String, "default" : "NONAME"},
  lastname : {type : String, "default" : "NONAME"}
});
```
  
In the example above, we assign the default "NONAME" value to the name properties (both Strings), if no name is passed in.
  
* NOTE: `"default"` is specifically wrapped in quotes because it is a reserved word in JavaScript and it is not worth risking an error.
  
##### `required`
To make a field required (it will fail validation and throw an error if not included), you can use the required property and set it to a boolean. By default required is set to `false`:
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true}
});
```
  
Now both of the fields are required, if an update would remove one of them, or an attempt is made to create a new instance of the model without the field containing a value, an error will be thrown.
  
##### `min`, `max`
A `Number` can have a maximum and a minimum value which you decide:
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  age : {type : Number, min : 0, max : 110},
  salary : {type : Number, "default" : 25000, min : 25000}
});
```
  
The schema above illustrates how min and max can be used in combination. `age` cannot exceed `110` and cannot be below `0`. `salary` illustrates that min/max can be combined with default.
  
##### `minlength`, `maxlength`
Similar to `Number`'s `min` and `max`, `String`s can use `minlength` and `maxlength` for validation.
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  zip : {type : String, minlength : 5, maxlength : 9}
});
```
  
##### `enum`
String's can also validate with a predetermined list of allowed values:
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  suffix : {type : String, enum : ["jr", "II", "III", "PHD"]}
});
```
  
If the suffix provided does not correspond to one of the values in the `enum` array, an error will throw.
  
Alternatively, you could define the enum outside of the schema, store it into a variable, and have the enum reference the variable:
  
```javascript
var states = [
  "AK","AL","AR","AZ" //etc
];
var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  state : {type : String, enum : states}
});
```

##### `match`
For `String`s, `match` uses RegExp to validate a field. Similar to state, the RegExp can either be included in the Schema, or as a variable that is assigned to the match property.
  
```javascript
// email validating RegExp
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var personSchema = new mongoose.Schema({
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  email : {type : String, match : re}
});
```
  
### Sending Validation Messages
Built into each of the validation requirements is the ability to send a customized message on failure. To do this, use an array as the value for the validation requirement. The first element will be the value for validation, the second element will be the error message.
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : {
    type : String, 
    required : [
      true, 
      "Firstname is required"
    ]
  },
  lastname : {type : String, required : [true, "Lastname is required"]}
});
```
  
In a controller (which is probably how you'll be using this), if a validation error occurs, it will throw an error object like the following:
  
```javascript
{
  "message": "Person validation failed",
  "name": "ValidationError",
  "errors": {
    "name": {
      "message": "Firstname is required",
      "name": "ValidatorError",
      "properties": {
        "type": "required",
        "message": "Firstname is required",
        "path": "firstname"
      },
      "kind": "required",
      "path": "firstname"
    }
  }
}
```
  
As you will likely have several forms of validation on any schema, it is useful to deal with these errors dynamically and present the user with feedback. 
  
For example, you could do something like the following (keep the message above in mind):
  
```javascript
if (err) {
  res.status(422); // cannot process data as it was received
  res.json({error : err.errors.name.message}); 
  // "Firstname is required"
}
```
  
Now your client side code can process the error (either by checking that the error property of the response is not `undefined`, or from the status code).

[cust]:http://mongoosejs.com/docs/validation.html