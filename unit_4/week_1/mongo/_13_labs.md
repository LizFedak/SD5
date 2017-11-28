# Labs
1: Import the provided 'students.json'  
  
2: Query the database for all of student 'Alix Sherrill' score records (hint: there are two documents)  
  
3: Look at the [mongodb docs][elem] for `$elemMatch` to query only 'Alix Sherrill' quiz scores:  

```javascript
{ "_id" : 14, "scores" : [ { "type" : "quiz", "score" : 68.64484047692098 } ] }
{ "_id" : 128, "scores" : [ { "type" : "quiz", "score" : 14.98112420690882 } ] }
```
  
4: Insert a new document into the collection. The "name" field should be "Alix Sherrill", give Alix some scores.  
  
  
3: SOLUTION!

```javascript
db.students.find({name:"Alix Sherrill"}, {scores : {$elemMatch : {type:"quiz"}}})

// two documents
{ "_id" : 14, "scores" : [ { "type" : "quiz", "score" : 68.64484047692098 } ] }
{ "_id" : 128, "scores" : [ { "type" : "quiz", "score" : 14.98112420690882 } ] }
// --> Projects queried dbs with second query object

```

[elem]:https://docs.mongodb.com/manual/reference/operator/projection/elemMatch/
