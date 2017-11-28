# Introduction to the $http service
* AngularJS provides an asynchronous connection to the DOM's XMLHttpRequest Object through the $http service.
  
* $http is promise based
  
* $http is exremely similar to jQuery's $.ajax method, in that it takes a single configuration object as an argument.
  
* Here is an example of an $http get request:
  
```javascript
$http({
  method : 'GET',
  url : '/products'
})
```
  
* You can easily chain a `then` on the back of the $http method to handle the response:
  
```javascript
$http({
  method : 'GET',
  url : '/products'
})
.then(function(response){
  // do something.
})
```
  
### Response object
* The response object returned asynchronously from an $http method has the following properties:
  
  * `data` -> {} or String
    * an object containing the response
  * `status` -> Number
    * the numerical status code of the response
  * `statusText` -> String
    * the status text associated with the status code
  
### Posting data
* $http POST/PUT/DELETE may require additional data or headers to be included in the request
  
* To provide headers, use the `headers : {}` property on the configuration object with the request:
  
```javascript
var product = {
  _id : 1,
  name : "banana"
}

$http({
  method : 'POST',
  url : '/products/' + product._id,
  headers : {
    'Content-Type' : 'application/json'
  },
  data : product
})
```
  
* As demonstrated above, the data can be included with the `data` property of the configuration variable.
  
#### Continue to [$http best practices](_26_best_http.md)
