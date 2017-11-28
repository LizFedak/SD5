# Complex Schemas with Sub Documents
* Mongoose supports the creation of individual schema for sub documents which can then be included within parent documents.
  
### Defining a Sub Document
Sub document schema is defined the same way as other schema. It is customary to create embedded document schema within the same file as the parent document (and it should be defined prior to the parent).  
  
The following example shows how this can be done by building upon our previous Person schema. Lets create an Address schema to add to our Person:
  
```javascript
var addressSchema = new mongoose.Schema({
  street : String,
  city : String,
  state : String,
  zip : String
});

var personSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  address : addressSchema
});

mongoose.model('Person', personSchema, 'people');
```
  
The above will set a single sub document which will use the addressSchema's validation when creating the sub document. As you can see below, it will also create a unique id for the embedded document:
  
```javascript
{
  "_id": "57638e512b66636411bee989",
  "firstname": "John",
  "lastname": "Smith",
  "__v": 0,
  "address": {
      "_id": "57638e4e2b66636411bee988",
      "zip": "something",
      "state": "something",
      "city": "something",
      "street": "something"
  }
}
```
  
We may not want the embedded document to have it's own `_id` field, we can stop this from being created by specifying `{_id : false}` in an options object passed as a second argument to the `mongoose.Schema`:
  
```javascript
var addressSchema = new mongoose.Schema({
  street : String,
  city : String,
  state : String,
  zip : String
}, {_id : false});  // no _id

var personSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  address : addressSchema
});

mongoose.model('Person', personSchema, 'people');
```
  
### Collection of Sub Documents
If we wanted the Person document to have several addresses, instead of just one, you simply need to type a field as an array of the sub document's schema:
  
```javascript
var addressSchema = new mongoose.Schema({
  street : String,
  city : String,
  state : String,
  zip : String
}, {_id : false});  // no _id

var personSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  addresses : [addressSchema]
});

mongoose.model('Person', personSchema, 'people');
```
  
Now a person can have more than one address.
  
You can embed as many documents as you wish inside of a document.
  
#### Continue to [validating with Mongoose](5_validation.md)
