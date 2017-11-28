## Middleware

### Overview
Middleware at its most basic level is the modularization of request handler functions. Its name, middleware, comes from the fact that these functions exist between the initial request and the final response. All middleware functions executed sequentially in the app.js file. These functions are usually referred to as part of the "middleware stack".

Say we have an app.js that looks like this:
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Welcome to my express app');
});

app.get('/helloworld', function(req, res){
  res.send('Hello World');
});
```
Here if we navigate to `/` we will get the message "Welcome to my express app", if we go to `/helloworld` we will instead get the message "Hello World". Fairly straight forward. Lets now add a middlewaråe function.
```javascript
var express = require('express');
var app = express();

app.use(function(req, res, next){
   console.log("Requested: " + req.url + "in middleware before response");
   next();
});

app.get('/', function(req, res){
  res.send('Welcome to my express app');
});

app.get('/helloworld', function(req, res){
  res.send('Hello World');
});
```

Now whenever we have a request, the function inside of `app.use()` will be invoked before the response is returned in one of the `res.get()` functions. Order here is very important. If we were to move the `app.use()` function below our routes the response would be sent before we reach the `app.use()` function.

In our previous Hello World example we did write middleware. Remember when we created the error handlers for a 404 and 500.

```javascript
//custom 404
app.use(function(req, res){
      res.status(404);
      res.send('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});
```
Here if no route matched the request url we fall into the 404 error function. However, if an error has occurred there will be an error object present and we will match the method signature in the custom 500 function.

#### Mounting Middleware
We bind middleware to our application using `app.use()`. `app.use()` can be called with one or two arguments, just a callback function, or a path as well as a callback function. For example:

```javascript
app.use(function(req, res, next){
    //do stuff
  });
app.use('/path', function(req, res, next){
    //do stuff
  });
```

The callback function has access to the request and response objects as well as somethings called next. If a middleware function doesn't resolve the request-response cycle it must call `next()` to call the next middleware function in the stack.    

### Static Middleware
Static middleware sets up a path to the static content that needs to be deployed with the app. This is usually done via a ``public`` folder in the root of the project. This folder is where we put out images, stylesheets, javascripts, and anything else we need to be accessible.

We have to explicitly tell our Express app the path to this folder so that it is accessible on the server. We do this by setting the express.static function as follows:

```javascript
app.use(express.static(__dirname + '/public'));
```

The ``__dirname`` here is shorthand for the path to the current directory. Our application now knows to look for all static content within the `/public` directory. Lets say I have a style sheet in the folowgin location `myApp/public/stylesheets/custom.css`. If I were to include this stylesheet in one of my html documents I wouldn't have to give the explicit path from the root,
`<link rel="stylesheet" href="~/public/stylesheets/custom.css">`, rather because my app knows the path to my public directory I could simply path from there:
`<link rel="stylesheet" href="stylesheets/custom.css">`.

### [Express Image Server](../../labs/imageServer.md)
