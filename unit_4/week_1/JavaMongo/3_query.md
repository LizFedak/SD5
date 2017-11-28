# Query
* NOTE: assume the following code examples are within the main created in 'Setup':

### Find All & Cursors
The same functions we've used with Mongo in the shell and JavaScript are used to query our collection in Java:
  
```javascript
if (collection != null) {
  try {
    MongoCursor<Document> cursor = collection.find().iterator();
    while (cursor.hasNext()) {
        System.out.println(cursor.next().toJson());
    }
  } catch (MongoException e) {
      System.err.println(e.getStackTrace());
  }
}
```
  
Above we use `.find()` to query all of the mongo documents in the collection (this is the "students" collection we retrieved in setup).  
  
The returned object extends the `FindIterable` interface, using the `.iterator()` method, this can be stored into a `MongoCursor<Document>` typed variable.  
  
Now that we have a cursor, the same `.hasNext()` and `.next()` methods are available, allowing us to use a while loop to iterate over each of the returned documents and print them to the console. Note the `.toJson()` method which converts these to a JSON format.
  
### Find with Document
In Java we can't just query with an empty document, or use something that looks like JSON notation the way we could in JS. Instead we have to use instances of the `BSON Document` class to create objects:
  
```java
if (collection != null) {
  try {
    Document doc = collection.find(new Document("name", "Echo Pippins")).first();
    System.out.println(doc.toJson());
  } catch (MongoException e) {
    System.err.println(e.getStackTrace());
  }
}
```
  
In the above example the `new Document("name", "Echo Pippins")` is the equivalent of `{name : "Echo Pippins"}` from the queries we've written previously...it's just the Java way of doing this.  
  
The `.first()` method ensures that we only retrieve the first document in the returned cursor.  
  
As only one document is returned, we can store it in a `Document` instead of a cursor.
  
This syntax can become somewhat complex...particularly when querying for data in embedded documents:
  
```java
if (collection != null) {
  try {
    Document doc = collection.find(
      new Document("scores",
        new Document("$elemMatch",
          new Document("type", "quiz")))).first();
    System.out.println(doc.toJson());
  } catch (MongoException e) {
    System.err.println(e.getStackTrace());
  }
}
```
  
The above is equivalent to:
  
```javascript
collection.find({scores : {$elemMatch : {type : "quiz"}}});
```
  
### Filters Class
* [Filters Docs][filters]
  
Due to the complexity of using so many nested Documents to stand in for objects, there is a convenience class of Filters which abbreviates the syntax slightly.
  
```java
if (collection != null) {
  try {
    Document doc = collection.find(eq("name", "Echo Pippins")).first();
    System.out.println(doc.toJson());
  } catch (MongoException e) {
    System.err.println(e.getStackTrace());
  }
}
```
  
Above the 'equals' method (`eq()`) functions essentially the same was as passing in a new document.  
  
The Filters class makes available a large number of convenience methods like this should you desire to use them in place of creating nested documents.
  
### Projection
* [Projection Docs][proj]
  
Similar to the Filters class, the Projection static class allows you to project only the aspects of data you wish to retrieve.
  
```java
if (collection != null) {
  try {
    Document doc = collection.find(eq("name", "Echo Pippins"))
      .projection(fields(exclude("_id"),include("scores"))).first();
    System.out.println(doc.toJson());
  } catch (MongoException e) {
    System.err.println(e.getStackTrace());
  }
}
```
  
The above example uses the project method to indicate which fields to exclude (`_id`), and which to include (`scores`).
  
#### Continue to [labs](4_labs.md)

### Resources
* [API docs][doc]
* [Filters Docs][filters]

[doc]:https://api.mongodb.com/java/3.2/
[filters]:http://api.mongodb.com/java/3.0/?com/mongodb/client/model/Filters.html
[proj]:http://mongodb.github.io/mongo-java-driver/3.2/builders/projections/