# Projection
* reduces the amount of data returned from a query, reducing network overhead and processing requirements
* supplied as the second argument to a find command.
  * `db.collections.find({}, {"property" : 1, "_id" : 0})` -> return the property where value is set to 1, exclude _id (setting it to 0)
  * Alternatively, include all fields except for those marked with a 0.
  
* Projection ensures that only the data necessary is returned, reducing latency and data size.
  
#### Continue to [sort](_12_sort.md)