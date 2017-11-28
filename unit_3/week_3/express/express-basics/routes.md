## Routes with Express

### Defining a Routes
When using Express we define routes using the app object we set up in our Express applications ``var app = express();``.

Express gives us a functions to deal with all of the specific HTTP request methods (GET, PUT, POST, DELETE) for a defined URI.

```javascript
app.get();  
app.put();  
app.post();  
app.delete();
```

Each of these methods takes two arguments, a path and a callback function: ``app.get(path, callback [, callback ...])``. These functions can actually take multiple callback functions and act in a similar manor to middleware. With that being said there aren't many use cases where I see this as a useful practice. Some actual code could look something like this:

```javascript
app.get('/', function(req, res){
    res.send('index route');
});
```

### Request and Response
You may have noticed all the callback functions we write for routing take `req, res` as arguments. These are the request and response objects respectively. The Express docs have all of the methods available on the response object. Some of which are:

##### Request
The request object allows you to access information sent by the clients request to the server.
* ``req.params`` Gives access to URI params which is discussed below.
* ``req.query`` Gives access to the query params in a get request.
* ``req.body`` Allows you to access the body from a POST request.
* ``req.headers`` Gives you access to the headers in the clients request to the server.

Some of these require additional packages to be included in your program via npm. In order to access the properties of the req.body we need to include something called bodyParser. To include this we use our familiar require pattern and then mount it as middleware as follows:

```javascript
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
```
This allows us to extract information sent in the body of the POST request in standard URL format as well as json format.

##### Response
The response object allows us to send data back to the browser. The Express docs have all of the methods available on the response object. Some of which are:
* ``res.status();`` Sets the HTTP status code.
* ``res.send(data);`` Sends 'data' to the browser.
* ``res.redirect(url);`` Send the client to a different url.
* ``res.render();`` Renders whatever html or view engine file you reference as an argument.

### URI Params
With express adding params to a URI is simple. When defining a route in your code you can add params to the URI by simple adding ``:paramName`` in the URI. Lets, for example, make a route ``/employee`` that takes an id param. Theoretically, this route could look up employee information based on the employee id passed in. It would look something like this:

```javascript
app.get('/employee/:id', function(req, res){
    res.send('In employee with id param');
});
```

You can access parameters embedded in the URI via the request object. If we wanted to extract the id from the URI in the previous example

```javascript
app.get('/employee/:id', function(req, res){
    var empID = req.params.id;
    res.send('Employee id= ' + empID);
});
```

### [Express Middleware](middleware.md)
