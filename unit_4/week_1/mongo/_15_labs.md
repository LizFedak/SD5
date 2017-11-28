# Labs 2
1: We will be using the student collection from earlier.  
  
Create a directory, add an `app.js` file, and initialize it with `npm init`.  
  
Install the `mongodb` directory.
  
2: In `app.js` require and configure the `mongodb` driver.  
  
3: Create a connection to the database. Write a query that prints the names of 
each student to the console (note: only print each name once...lookup 'mongodb distinct')  
  
Be sure to close your connection after the query completes.  
  
4: Comment out the previous code.  
  
Create a new connection to the database. Write a query that finds all of the 
documents for each a given student. For now use "Jaclyn Morado" (note: this is 
a hard coded name, but it could just as easily be a variable).  
  
Print out each of the individual scores for the student with the format:
  
```bash
type : score
```
  
Sort the output from highest to lowest (descending)  
  
Don't forget to close your connection to the database.
  
5: Comment out the previous code.  
  
Create a new connection to the database. Write a query that returns only the scores of
a specified type (for now, use "homework"), sort them, and print them to console. Hint:
 use projection.  
  
6: Comment out the previous code.  
  
Now it's time to experiment with routing using the mongo driver.  
  
Install and save express. In your app.js, configure the node server to listen 
on port 3000.  
  
Wrap each of your mongo queries in `app.get()` methods (don't worry about not using
the app_server/app_api pattern with controllers and routers for now, this is
just a simple example). Be sure to send a response.json from the route with the data
queried from mongo.  
  
In your browser (or in postman), navigate to your routes, you should see the json 
data from the query display.
  
