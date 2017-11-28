# Mongo Shell

### Create DB
Mongo makes database creation extremely simple.

```bash
> use baz
switched to db baz
```
  
To view your current database, use the `db` command
  
```bash
> db
baz
```
  
In order to list all databases, use the `show dbs` command  
  
* NOTE: as 'baz' doesn't currently contain any documents, it won't be listed
  
```bash
> show dbs
test 0.078GB
```
  
### Collections
Mongo documents are organized into 'Collections'. These are roughly synonymous with SQL tables.
  
  
To view a list of the collections contained within a database, use `show collections`
  
```bash
> show collections
system.indexes
```
  
To create a new collection, insert a document into the collection. To do this, use the syntax `db.collectionName.insert({})`. The following code will create a new empty document into a database named 'leaf':
  
```bash
> db.leaf.insert({})
WriteResult({ "nInserted" : 1 })
```
  
If you use the `show collections` command again, you will see the newly created collection listed:
  
```bash
> show collections
system.indexes
leaf
```
  
You can drop an entire collection from a database by invoking the `drop()` method on it:
  
```bash
> db.leaf.drop()
true
> show collections
system.indexes
```
  
#### Continue to [import a test database](4_import.md)
