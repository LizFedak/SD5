### Labs
1: Create a simple Express App  
  
2: Install and configure 'cookie-parser', including a 'credentials.js' with a secret  
  
3: Create a post route which stores whatever is sent to it in an array stored in a cookie. Use this route with Postman to store several objects within the the cookie. Each object should have an 'id' and a quantity (example: `{id : 1, name : 'banana', price : 0.38, quantity : 5}`)  
  
4: Create a get route which uses an ':id' parameter to retrieve objects from the cookie based on the id property.
  
5: Add logic to your route in step 3 to check if an object already exists. If another object with the same id is added, increment the quantity  
  
6: Create another route which calculates the total cost of all of the objects stored in your cookie (e.g. total sum of all items prices multiplied times their quantities), returns that amount, and then resets the cookie to an empty array