## Hello World with Express

### Step 1
Lets set up our node/express project.
* Create a project folder in terminal, this will be the root directory of our express application.
* Run the ``npm init`` command inside of the project folder and configure the ``package.json`` file.
* Install express and save it as a dependency for your project. ``npm install --save express``
* Create the app.js file inside the root directory of the project folder.
* Inside of this file use the require pattern for express and set up our app object. The contents of the file should look as follows when you are done:

```javascript
//in app.js

var express = require('express');
var app = express();
```
### Step 2
Configure your app to listen on port 3000.

* Inside of your app.js file we are going to use the app.listen to instruct our application to listen to a specific port when it is running.
* The app.listen function takes two parameters, the port number and a callback function.
* We are going to pass this function port 3000 as well as a function that prints out that the app has been started and is listening on port 3000.

When we are finished our app.js file should look like this:

```javascript
//in app.js

var express = require('express');
var app = express();

app.listen(3000, function(){
      console.log('Hello World app started on http://localhost:' +  
      3000 + '; press ctrl-c to terminate.');
});
```

### Step 3
Create custom 404 and 500 error handlers.

* The app.use function allows us to mount middleware to our application.
* Use this method to create an anonymous function that handles 404s as well as a separate function that handles 500s.  

When we are finished our app.js file should look like this:

```javascript
//in app.js

var express = require('express');
var app = express();

app.use(function(req, res){
      res.status(404);
      res.send('404');
});

app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});

app.listen(3000, function(){
      console.log('Toto app started on http://localhost:' +  
      3000 + '; press ctrl-c to terminate.');
});
```

* Within these functions res.status sets the status code to the appropriate number.
* res.send is sending static text to the browser to be displayed. A method res.render exists that we will use to instruct the browser to render specific html or handlebars files.

npm start is a command we can use to run the node server and have our content accessible in the browser under port 3000. This does require us to manually start and stop the server every time we change any content. There is a better way however. Run ``npm install -g nodemon``. This utility allows you to run a  single command ``nodemon`` that will start the server and auto deploy the content every time it senses a change. Run this command and see that localhost:3000 is giving us a 404 page. We have a functioning node/express server, now lets define a route for helloworld.

### Step 4
Lets define a few custom routes in our app.js file. One will be the generic ``/`` route for our index page. The second will be our ``/helloworld`` route.

* In express we use app.verb to express routes, verb being (get/put/post/delete).
* Both of our routes will be gets. These methods take two inputs, the path as a string and a callback function.
* Define both of these routes in your app.js files.

When we are finished our app.js file should look like this:

```javascript
//in app.js

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Welcome to my express app');
});

app.get('/helloworld', function(req, res){
  res.send('Hello World');
});

// ... more below

```

If you still have nodemon running check the logs to make sure the changes deployed properly. If you have stopped it, run the command again. Refresh your browser and you should see the ``Welcome to my express app`` message displayed. Change the url to localhost:3000/helloworld, you should see the message ``Hello World`` displayed.


### [Express routing](../express/express-basics/routes.md)
