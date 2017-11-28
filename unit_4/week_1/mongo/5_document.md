# MongoDB Document
### What is a Document?
A Mongo document looks almost exactly like JSON when queried. Natively, inside of MongoDB data is stored in BSON format, but is converted to more human readable JSON format when queried.
  
  
A Mongo document consists of a unique `_id` property...that's it, there are no other rules.
  
```bash
> db.leaf.insert({})
WriteResult({ "nInserted" : 1 })
```
  
To view this document, run a simple query with the `find()` method.
  
```bash
> db.leaf.find()
{ "_id" : ObjectId("5760d9fda071c556f3ba3457") }

```
  
The returned document has a single auto-generated `_id` property which corresponds to a unique 'ObjectId'. The ObjectId is composed of a combination of random bits, a timestamp, and some meta data ensuring its uniqueness.
  
  
This is the simplest possible document.
  
#### Continue to [MongoDB cursors](6_cursor.md)