# Setup
### Dependency
The first order of business is including the Mongo driver as a dependency in the `pom.xml`. At the time of writing, the most recent Mongo Driver release is version '3.2.2.':
  
```xml
<dependencies>
    <dependency>
        <groupId>org.mongodb</groupId>
        <artifactId>mongodb-driver</artifactId>
        <version>3.2.2</version>
    </dependency>
</dependencies>
```
  
### Establish Connection to Database
To connect to a Mongo database, a number of driver classes are used:
  
```java
public class MongoTest {
  public static void main(String[] args) {
    final String DB_ADDRESS = "mongodb://localhost:27017";
    MongoClientURI dbURL = new MongoClientURI(DB_ADDRESS);
    MongoClient mongoClient = new MongoClient(dbURL);
    MongoDatabase db = mongoClient.getDatabase("test");
  }
}
```
  
* `MongoClientURI` : takes the database location as a String. This could be a local resource, or your production database. This class provides the drive with a host of 'getter' and 'setter' methods for unpacking username, password, host, and database name from the provided String.
  
* `MongoClient` : this class establishes a pool of connections which can be used to access the resource passed to it's constructor as an argument.
  
* `MongoDatabase` : the actual database you will be working with. Accessed from the established connection made by the `MongoClient`
  
### Accessing a Collection
Next we will attempt to capture a collection to query. The following code initializes a null collection variable of type `MongoCollection<Document>`. The `Document` typing the collection is a BSON Document (a Mongo Document).
  
```java
MongoCollection<Document> collection = null;

try {
    collection = db.getCollection("students");
} catch (MongoException e){
    System.err.println(e.getStackTrace());
}
```
  
If the collection is successfully retrived, it will now be stored within the collection variable.  
  
Now we are prepared to begin querying the database.
  
### Complete Code to this Point:
  
```java
public class MongoTest {
  public static void main(String[] args) {
    final String DB_ADDRESS = "mongodb://localhost:27017";
    MongoClientURI dbURL = new MongoClientURI(DB_ADDRESS);
    MongoClient mongoClient = new MongoClient(dbURL);
    MongoDatabase db = mongoClient.getDatabase("test");

    MongoCollection<Document> collection = null;

    try {
        collection = db.getCollection("students");
    } catch (MongoException e){
        System.err.println(e.getStackTrace());
    }
  }
}
```
  
#### Continue to [query](3_query.md)
