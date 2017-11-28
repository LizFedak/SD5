# Removing Documents

```javascript
db.collection.remove(
   <query>,
   {
     justOne: <boolean>
   }
)
```
  
##### `<query>`
The query to find the document(s) you wish to update.
  
```javascript
{_id : 1}
```
  
##### `justOne: <boolean>`
OPTIONAL. To limit deletion to just one document, use `true`.  
  
Defaults to 'false', which will delete all corresponding documents.

### Remove Example
It's driving me crazy that two of our records have non-numeric `_id`s. As we learned in the section on `update()`, we can't change the `_id`, so let's remove and re-insert the documents.
  
```bash
> db.sd.remove(
... { age : {$gt : 28}},
... {
...   justOne : false
... }
... )
WriteResult({ "nRemoved" : 2 })
> db.sd.find().pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 25,
  "email" : "andrew@skilldistillery.com",
  "organization" : "Skill Distillery"
}
```
  
In the example above, I searched for all of the documents where the age property was greater than 28 to remove them. I also set the value of `justOne` to `false`. Given that `false` is the default value, I didn't need to do that, but it's always worth being extremely explicit in examples.  
  
Now let's add the documents back but with `_id`s more to our liking.

```bash
> db.sd.insert( { _id: 2, name : "Kris", age : 29, email : "kris@skilldistillery.com", organization : "Skill Distillery"})
WriteResult({ "nInserted" : 1 })
> db.sd.insert( { _id: 3, name : "Cole", age : 32, email : "cole@skilldistillery.com", organization : "Skill Distillery"})
WriteResult({ "nInserted" : 1 })
> db.sd.find().pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 25,
  "email" : "andrew@skilldistillery.com",
  "organization" : "Skill Distillery"
}
{
  "_id" : 2,
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "Skill Distillery"
}
{
  "_id" : 3,
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "Skill Distillery"
}
```
  
### Remove All Documents
Mongo makes removing all the documents from a collection extremely (nigh on frighteningly) simple. The following will remove all of the documents in a collection.
  
```bash
db.sd.remove({})
```  
  
#### Continue to [projection](_11_projection.md)