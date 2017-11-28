# Labs
1:  Create route.  
* use `insert()` to create a new student record from Postman. *hint* -> post route -> use body-parser  
  
2: Validate the data from 1 before inserting it. The data should:  
* Have a 'name' field that is a string
* have a colelction fo score objects. If none are provided when the document is created, initialize the field with an empty array.  
  
3: Make and 'addScore' route, which validates that the score is correctly formatted and thena dds it to the documents 'scores' array --> send the '_id' of the document as a path variable  
  
4: Make a 'delete' route which removes a document  
  
5: Make a 'changeName' route which takes a name as a path variable and changes all documents with that name to a new name
