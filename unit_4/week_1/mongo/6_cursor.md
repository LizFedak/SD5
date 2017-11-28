# MongoDB Cursor
### What is a Cursor?
The `db.collection.find()` method returns a cursor. A cursor is a collection of documents with its own functionality.
  
  
We will use three of these methods:  
* Cursor.hasNext()
* Cursor.next()
* Cursor.toArray()
  
To experiment with iterating over cursors, we will leverage the Mongo shell's native JavaScript to store a cursor in a variable:
  
```javascript
> var cursor = db.leaf.find();
```
  
### `Cursor.hasNext()`
* returns a boolean indicating if there is another document within the cursor:
  
```javascript
> var cursor = db.leaf.find();
> cursor.hasNext()
true
```
  
### `Cursor.next()`
* iterates the cursor to the next document in the cursor
  
```javascript
> var cursor = db.leaf.find();
> cursor.next()
{ "_id" : ObjectId("5760d9fda071c556f3ba3457") }
```
  
### `Cursor.toArray()`
* converts the cursor to a javascript array
  
```javascript
> var c = db.leaf.find()
> c.toArray()
[
  {
    "_id" : ObjectId("5760d9fda071c556f3ba3457")
  },
  {
    "_id" : ObjectId("5760dfaba071c556f3ba3458")
  }
]
```


#### Continue to [inserting documents](7_insert.md)