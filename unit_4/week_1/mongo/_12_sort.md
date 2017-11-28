#Labs
Documents within a cursor can be sorted using the `sort()` method.  
  
`sort()` takes a configuration argument that specifies a field to sort on, and then a positive or negative `1` indicating whether the field should be sorted in ascending or descending order.  
  
```javascript
> db.sd.find().sort({"name":-1})
{ "_id" : ObjectId("5760e8daccacbc8e61f9a58f"), "name" : "Kris", "age" : 29, "email" : "kris@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : ObjectId("5760e91accacbc8e61f9a590"), "name" : "Cole", "age" : 32, "email" : "cole@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : ObjectId("5760e8daccacbc8e61f9a58e"), "name" : "Andrew", "age" : 25, "email" : "andrew@skilldistillery.com", "organization" : "SkillDistillery" }

> db.sd.find().sort({"age":-1})
{ "_id" : ObjectId("5760e91accacbc8e61f9a590"), "name" : "Cole", "age" : 32, "email" : "cole@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : ObjectId("5760e8daccacbc8e61f9a58f"), "name" : "Kris", "age" : 29, "email" : "kris@skilldistillery.com", "organization" : "SkillDistillery" }
{ "_id" : ObjectId("5760e8daccacbc8e61f9a58e"), "name" : "Andrew", "age" : 25, "email" : "andrew@skilldistillery.com", "organization" : "SkillDistillery" }
```
  
With more complicated data you can perform more complex sorts using two fields e.g.:  
  
```javascript
db.blog.find().sort({ age : -1, posts: 1 })
```

#### Continue to [labs](_13_labs.md)