# Overview
### Docs
The MongoDB Reference docs can be a little bit tricky to navigate to, here are some links that might be useful:  
* [MongoDB Shell Methods][shellmethods]
* [Glossary][glossary]  

### Overview
Why use Mongo, or any NoSQL database for that matter, instead of a relational SQL database?  
  
The driving concept behind Mongo and NoSQL is that there is a mismatch between the way RDBs store data and the way we use data in our applications. While RDBs store data in rows and columns, applications use this data as values and objects, requiring logic to be written which translates data back and forth between the two.  
  
MongoDB does not rely on tables...or schema...and there is no relationship between the objects it stores. Without schema the burden of maintaining data integrity, format checking, etc falls onto the application. A benefit of this is that we can create a highly customized method to store our data that fits our applications needs perfectly...on the downside it means that we have to validate everything ourselves.  
  
### Scalability
RBDs rely on the SQL implementation to protect the referential integrity of the data by locking tables. This reduces the speed of lookup/write and slows down the application (when scaled). In order to scale RDBs, you will need to replicate them across multiple instances, usually increasing latency and decreasing lookup speed. In order to hurry things up, RDBs can compromise integrity by allowing dirty reads, but this may or may not be optimal.  
  
Mongo avoids this problem in a number of ways. First, it uses 'single document write scope'. This means that instead of locking the entire collection (table) when a single record is updated, it only locks the document, allowing other reads to occur on the collection without slowing anything down. Additionally, Mongo scales by designating a single primary server which (may or may not) wait for writes to its child servers to be recognized before sending a success response. In other words, while users can read from any of the child servers, only the primary server accepts writes. When the primary is updated, it will then update the secondary(s). This may introduce the possibility of returning old data from a read, but because it is asynchronous and thus non-blocking, there is no lag in the response. This process is called 'eventual consistency'.  

### Speed
MongoDB achieves look up speeds roughly equal to SQL implementations on average for simple queries. However, Mongo's lookup speed increases dramatically when compared to fairly complex SQL lookup. This is because of the way that documents are stored in Mongo vs SQL implementations.  
  
In Mongo all of the values associated with fields in a collection are indexed on what amounts to a hash table. The values serve as the keys for this table, and the values assigned to them are arrays of locations in memory. These locations are the documents that possess that value. Thus, when you query a particular field inside of a Mongo collection, it uses dictionary lookup to return all of the associated documents as results. Because mongo is non-relational, and documents are essentially self contained objects, there is no cross table lookup...which can potentially increase performance.

[shellmethods]: https://docs.mongodb.org/manual/reference/method/
[glossary]: https://docs.mongodb.org/manual/reference/glossary/


#### Continue to [install Mongo](2_install.md)
