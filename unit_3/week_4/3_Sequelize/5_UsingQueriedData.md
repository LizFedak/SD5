### Using Queried Data with Promises
* All of the query methods in Sequelize are asynchronous.
  
* Sequelize uses JavaScript's `Promise` object to make the data available with callback methods.
  
* `Promise`  is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.
  
* In Sequelize, the operation which hasn't been completed is the SQL query. When it completes, it will make the data available to the callback function(s) you provide.
  
* `Promise.then(onFulfilled, onRejected)`:
  * Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is undefined).
  * Both the `onFulfilled` & the `onRejected` handlers are callback functions that will be passed data.
  
* With Sequelize, `onFulfilled` will be passed the resulting data from your query. `onRejected` will be passed an error should one propogate.
  
```javascript
User.findAll()
  .then(function(users){
  	console.log(users);
  },
  function(err) {
  	console.error(error);
  });
```
  
* To be even more explicit you can perform error handling with the `Promise.catch(onRejected)` method which only has one handler, and will only be passed the error that propogated.
  
* Promises handler methods can also be chained, allowing you to perform multiple operations on the resulting data.
  
```javascript
User.findAll()
  .then(function(users){
  	console.log(users);
  })
  .catch(  function(err) {
  	console.error(error);
  });
```
  
* When the query completes, the `Prototype.then()` method will be passed the data and perform whatever handler you have provided.
  
#### Continue to [6 - Using Sequelize Queries in Express](6_UsingQueriesWithExpress.md)
