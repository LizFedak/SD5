# Node Driver
Create a directory and an `app.js` file
  
```bash
> mkdir example
> cd example
> touch app.js
```
  
Run init to create a package.json
  
```bash
> npm init
```
  
Install the dependency:
  
```bash
npm install --save mongodb
```
  
Require the driver dependency in a file, and extract the `MongoClient`:
  
```javascript
var Mongo = require('mongodb').MongoClient;
```
  
Create a variable which stores the host and database name of your mongodb
  
```javascript
var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/baz';
```
  
Create a connection to the database:
  
```javascript
var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/baz';

Mongo.connect(dbURL, function(err,db){
  if (err) console.error(err);
});
```
  
Now you can specify a collection and create queries.
  
```javascript
var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/baz';

Mongo.connect(dbURL, function(err,db){
  if (err) console.error(err);
  var collection = db.collection('myCollection'); // selects this collection
});
```
  
Query syntax is very similar to the mongo shell commands. NOTE! Your database
queries will be asynchronous as they are IO operations:
  
```javascript
var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/baz';

Mongo.connect(dbURL, function(err,db){
  if (err) console.error(err);
  var collection = db.collection('myCollection');
  collection.find().toArray(function(err,docs){ // find all of the docs
    if (err) console.error(err);
    console.log(docs)
    db.close(); // don't forget to close the connection to cleanup
  });
});
```
  
