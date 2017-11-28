# Update Documents
In Mongo updating is made easy by the `update()` function:

```javascript
db.collection.update(
  <query>, 
  <update>,
  {
    upsert: <boolean>,
    multi: <boolean>
  }
)
```

##### `<query>`
The query to find the document(s) you wish to update.

```javascript
{_id : 1}
```

##### `<update>`
The update to make (more on this in a moment)

##### `upsert : <boolean>`
OPTIONAL. If `true` creates a new document if no document matches the query.  
  
Defaults to `false` which does NOT insert a new document if none is found.

##### `multi: <boolean>`
OPTIONAL. If `true` updates multiple documents (that meet query conditions).  
  
Defaults to `false`.  
  
**NOTE**: You cannot update an `_id`.

### `$set`
`$set` is used to make the changes to the queried document. For instance, in our 'sd' collection, let's update Andrew's age to be correct (he's 25):

```bash
> db.sd.update(
... { name : "Andrew"},
... {
...   $set : { age : 25 }
... }
... )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.sd.find({name:"Andrew"}).pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 25,
  "email" : "andrew@skilldistillery.com",
  "organization" : "SkillDistillery"
}
```
  
**NOTE**: If you don't use `$set` and simply pass in an object into the second argument, it will overwrite the current document entirely.

### `$unset`
Remove the property, the value passed to this operation is irrelevent.
  
```bash
> db.sd.update({},{
  $unset : {"email" : ""}
})
```
  
### `multi` option
When we initially inserted the 'organization' field into our records, we didn't include a space!!! Luckily for us, we can update all the documents in our database at once.
  
```bash
> db.sd.update( 
... { organization : "SkillDistillery"}, 
... {   
...   $set : { organization : "Skill Distillery"} 
... }, 
... { multi : true } 
... )
WriteResult({ "nMatched" : 3, "nUpserted" : 0, "nModified" : 3 })
>
> db.sd.find().pretty()
{
  "_id" : 1,
  "name" : "Andrew",
  "age" : 25,
  "email" : "andrew@skilldistillery.com",
  "organization" : "Skill Distillery"
}
{
  "_id" : "kris@skilldistillery.com",
  "name" : "Kris",
  "age" : 29,
  "email" : "kris@skilldistillery.com",
  "organization" : "Skill Distillery"
}
{
  "_id" : ObjectId("570c2da7e3e372248531bfed"),
  "name" : "Cole",
  "age" : 32,
  "email" : "cole@skilldistillery.com",
  "organization" : "Skill Distillery"
}
```


  

#### Continue to [remove documents](_10_remove.md)
