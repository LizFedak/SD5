# Schema
* With the database connection configured, it's time to turn attention to creating models that will enforce our schema.
  
### Data Types
* Mongoose models data by creating a typed blueprint for objects to follow.
  
* Mongoose's schema mirrors the actual data very closely. Consider the following object:
  
```javascript
{
  "firstname" : "Bob",
  "lastname" : "Dobbs",
  _id : ObjectId("5h2l18ds0887s0a8392999djj")
}
```
  
The above object is actual data, below is how it's schema would look in Mongoose:
  
```javascript
{
  "firstname" : String,
  "lastname" : String
}
```
  
* NOTE: Mongoose will automatically instantiate an `_id` on object creation.
  
This example dictates that the modeled object will have two fields, both of which are of 'String' type. Other available types in Mongoose are:
  
* `Number`
* `Date`
* `Boolean`
* `Buffer` --> for binary information like images
* `Mixed` --> any data type
* `Array` --> either of a dictated type, or of sub-documents (more on this later)
  
### Defining Mongoose Schema in Express
1: Create a new file named after the resource (i.e. person.js)  

2: Require `mongoose`  
  
```javascript
var mongoose = require('mongoose');
```
  
3: Use the schema constructor from mongoose to create a new schema and store it into a variable:  
  
```javascript
var personSchema = new mongoose.Schema({ });
```
  
4: Complete your schema based on what you need your data to look like:
  
```javascript
var personSchema = new mongoose.Schema({
  firstname : String,
  lastname : String
});
```
  
5: Use your schema to compile a model with mongoose:
  
```javascript
mongoose.model('Person', personSchema, 'people');
```
  
Let's investigate each component of the `model` method a little bit more closely:
  
```javascript
mongoose.model  (  'Person'  ,  personSchema,  'people'  )
                   |                  |            |
              [Name of model]  [schema to use]  [collection name]
                                                   ~optional~
```
  
The collection name is optional. If you exclude it Mongoose will create/use a collection that is the lower-cased & pluralized model name (e.g. 'persons');
  
6: Require the model in your `db.js`. At the bottom of your `db.js`, after the connection logic, require the model file. This makes the model available.
  
```javascript
// db.js ~at the bottom of the file
require('./person');
```
  
7: Require your `db.js` in the `app.js`. In order to ensure that your database connection is established when you application loads, and that your models will be available, require your database configuration file (`db.js`) at the top of `app.js`:  
  
```javascript
// app.js ~close to the top
require('./models/db');
```
  
That's it, now you should be set to use your model.
  
#### Continue to [embedding sub documents](4_subdocs.md)