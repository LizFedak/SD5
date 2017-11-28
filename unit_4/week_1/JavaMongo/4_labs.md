# Labs
1: In a PersonTest.java file, create a connection to your database (the same on you used with mongoose to create your Person documents)  
  
2: Write a query that returns all of the Person documents and logs them to the console as json  
  
3: Write a query that returns only those documents where salary is greater than $40,000.  
  
4: Write a query that returns only the punchcards for one individual.  
  
5: Create another file named Address.java. Inside, create a POJO (plain old java object) with fileds like 'street', 'city', 'state', 'zip' (be sure to use good encapsulation). Create getters and setters.  
  
Back in your PersonTest.java's main, write a query that returns only the Address for each of your 'People' (use projection), iterate over the returned cursor, and create a Java Address objects for each document. Store these address objects in an ArrayList.  