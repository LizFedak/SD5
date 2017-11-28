# Insert a Document
The syntax to insert a document is fairly straight forward:
* `db.collection.insert({})
  * `.collection` is the name of the collection you want to insert into
  * `.insert({})` is the function to insert a document into the collection. It takes a single argument, which is the object (Document) you wish to insert.
  * NOTE: if a collection does not exist, inserting a document into it will create it
  
Let's insert a Document into a 'baz' database.
```bash
> db.baz.insert({
...  name : "Cole",
...  age : 32,
...  email : "cole@skilldistillery.com",
...  organization : "SkillDistillery"
... })
WriteResult({ "nInserted" : 1 })
```
The `WriteResult({ "nInserted" : 1 })` confirms that we have created a document. Now, we should be able to see our database when we run `show dbs`  
```bash
> show dbs
baz  0.078GB
test 0.078GB
```
  
#### Continue to [finding documents](8_find.md)