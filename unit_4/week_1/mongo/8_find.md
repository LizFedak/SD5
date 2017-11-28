# Querying MongoDB
### Find Data
Now that we've created a document, it would be nice to see it!  
  
To return all of the documents in a Mongo collection, you can use the `.find()` method.
```bash
> db.sd.find()
{ "_id" : ObjectId("570c2da7e3e372248531bfed"), "name" : "Cole", "age" : 32, "email" : "cole@skilldistillery.com", "organization" : "SkillDistillery" }
```
To make our data more human readable, you can chain the `.pretty()` function onto the find
```bash
> db.sd.find().pretty()
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
##### `_id`
There are two rules about how Mongo Documents are structured.  

1. Every document must have a unique `_id` field. If you do not provide one (as above), Mongo will automatically generate and provide one for you (ie. `ObjectId("570c2da7e3e372248531bfed")`).  

2. There are no other rules.  
  
Now that we know the rules, let's insert another Document and this time we will give it an `_id`
```bash
> db.sd.insert({
...   _id : 1,
...   name : "Andrew",
...   age : 26,
...   email : "andrew@skilldistillery.com",
...   organization : "SkillDistillery"
... })
WriteResult({ "nInserted" : 1 })
```
Now that we've explicitly declared the `_id` Mongo will not need to generate one for us.
```bash
> db.sd.find().pretty()
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "SkillDistillery"
}
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 26,
  "email" : "andrew@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
We don't have to use numbers for the `_id` property, `_id`s can be anything that will be unique for our document. For instance, an email could be an `_id`: 
```bash
> db.sd.insert({
...   _id : "kris@skilldistillery.com",
...   name : "Kris",
...   age : 29,
...   email : "kris@skilldistillery.com",
...   organization : "SkillDistillery"
... })
WriteResult({ "nInserted" : 1 })
```
```bash
> db.sd.find().pretty()
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "SkillDistillery"
}
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 26,
  "email" : "andrew@skilldistillery.com",
  "organization" : "SkillDistillery"
}
{
  "_id" : "kris@skilldistillery.com",
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
### Querying Individual Documents
It's getting a little bit cumbersome to return every Document in our collection using `.find()`. Fortunately, Mongo gives us a simple way to query Documents by the value of their fields.  
  
By passing an object to the `.find()` with the field(s) and value(s) we want to match, we can retrieve a more specific list. For example. If you wanted to query our 'sd' collection for anyone whose age is 26:
```bash
> db.sd.find({ age : 26 }).pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 26,
  "email" : "andrew@skilldistillery.com"
}
```
As you can see only one document was returned, because only one record had an "age" field that matched the value 26.  
  
If more than one document matches the query, then each of the corresponding documents will be returned:
```bash
> db.sd.find({organization : "SkillDistillery"})
{ "_id" : 1, "name" : "Andrew", "age" : 26, "email" : "andrew@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : "kris@skilldistillery.com", "name" : "Kris", "age" : 29, "email" : "kris@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : ObjectId("570c2da7e3e372248531bfed"), "name" : "Cole", "age" : 32, "email" : "cole@skilldistillery.com", "organization" : "SkillDistillery" }
```
### Query Conditions with Operators
Mongo also provides a large number of operators to narrow the list of documents to be returned.  
  
When using an operator for the query, pass the operation as the value.
### Greater Than (`$gt`)
```bash
> db.sd.find({age : {$gt : 30}}).pretty()
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
### Less Than (`$lt`)
```bash
> db.sd.find({age : {$lt : 30}}).pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 26,
  "email" : "andrew@skilldistillery.com",
  "organization" : "SkillDistillery"
}
{
  "_id" : "kris@skilldistillery.com",
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
### Combine Operators
What if we wanted to query the database for someone who was both greater than 28, and less than 30? In Mongo, you can comma seperate the operators inside of the value object assigned to the field:
```bash
> db.sd.find({age: {$lt : 30, $gt:28}}).pretty()
{
  "_id" : "kris@skilldistillery.com",
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
## Query with Logical 'AND'
To be more restrictive, we can pass a query object with comma seperated properties and values to only return documents where all conditions are true.
```bash
> db.sd.find({name: "Kris", organization: "SkillDistillery"}).pretty()
{
  "_id" : "kris@skilldistillery.com",
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
## Query with Logical 'OR'
To be more inclusive, we can also use the `$or` query operator to query documents which fulfill any of the requirements:
```bash
> db.sd.find({$or : [ { age: 32 }, { name: "Andrew"} ] }).pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 26,
  "email" : "andrew@skilldistillery.com",
  "organization" : "SkillDistillery"
}
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```  
  
#### Continue to [updating documents](9_update.md)