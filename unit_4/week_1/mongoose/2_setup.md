# Getting Started
```bash
npm install --save mongoose
```
  
* we are going to create a few directories in our app_server

  * first, create a directory named 'models'. This is where we will store all of the schemas for the objects we store in our database. It is also where we will place our database configuration file.
  
  * next, create a file named 'db.js' inside of models. This is the file where we will create all of the logic concerned with connecting to the database, terminating the connection, and logging connection and error events.
  
* now, require mongoose where you'll need it...in your app_server/models/db.js
  
```javascript
var mongoose = require('mongoose');
```
  
### Creating a Connection
* With mongoose required, create a variable to hold the location of your database. We assign this to a variable because we will be using it multiple places in this file and it will be easier to update the location only where we assign it to the variable instead of everywhere that the variable is used.
  
```javascript
var dbLocation = 'mongodb://localhost/databaseName';
```
  
* Now connect mongoose to the databse
  
```javascript
mongoose.connect(dbLocation);
```

* This is the bare minimum needed to make the connection to the database. If we wanted to, we could skip immediately to writing schema definitions and using mongoose to retrieve our data from Mongo. However, at the moment we are not receiving any logging from our mongoose connection. If you start your application You will see any default Express/Node logging, but your mongoose connection will be a mystery. Let's add some logging for events that we will likely experience so that we know what is going on with our database.  

  
### Logging Connection Events
* A connected mongoose instance has a connection object as a property. We can setup some event listeners on this object to perform some action when an event occurs. For instance, when the connection is 'disconnected' (an event), we could have a callback function log the disconnection:

```javascript
var mongoose = require('mongoose');
var dbLocation = 'mongodb://localhost/databaseName'
mongoose.connect(dbLocation);
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has disconnected from ' + dbLocation);
});
```

* Setup logging events for 'connected', 'disconnected', and 'error' in this way.

* For the error event, it will probably be useful to log the actual error. Connection's 'error' event passes the error's stack trace to the callback function you provide, let's capture that error with a parameter and add it to the log.

```javascript
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection has failed due to error: ' + err);
});
```

* All together you should now have three connection event loggers which look like this:

```javascript
// CONNECTION EVENT LOGS
// Disconnected
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has disconnected from: ' + dbLocation);
});
// Error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection has failed due to error: ' + err);
});
// Connected
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + dbLocation);
});
```

### Closing Mongoose Connections
We are almost to the fun stuff, but before we get there, we need to setup a few more best practices. When mongoose opens a connection, it ties ups resources. Obviously we will need some number of connections to retrieve our data, but if too many connections are allowed to open, or are left open we might experience performance issues. Furthermore, if you are using nodemon to run your application locally, everytime it restarts on file change you will open a new connection to the database without closing the previous one...let's plan for this and close our connections on the events we expect to encounter.  

* First, let's account for normal app shutdown.

  * When you use `ctrl + c` to stop your application it is interpretted by Linux as a 'Keyboard signal interrupt' or... `SIGINT`, which performs a termination action. 
  
  * When this signal is sent, it can be intercepted by the Node global `process` object as an event. As it's an event...it can be listened for.
  
  * We know that the signal is `SIGINT`, and we know that the event is within `process`'s scope...so let's create an event listener for it:
  
```javascript
// For application termination (ctrl + c)
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by Signal Interrupt')
    process.exit(0);
  });
});
```

  * If you run your app with `npm start` and then use `ctrl + c` to stop it, you should see the message 'Mongoose disconnected by Signal Interrupt' print out.
  
* Next, lets deal with nodemon. Nodemon presents a problem because of how frequently it restarts, luckily, when it restarts, it also sends a Linux signal, meaning that we can capture it with an event listener. 

  * The signal nodemon sends is `SIGUSR2`, a 'User-defined signal 2', which triggers a termination action. This shutdown event is a little bit trickier because of how nodemon works. If we create an event listener using `process.on`, we will have problems as nodemon's restart procedure will keep firing the event without actually restarting. As a result, we need to employ the `process.once` listener to only call the shutdown and log one time.
  
```javascript
// Nodemon restarts
process.once('SIGUSR2', function () {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
  });
});
```

* Last but not least, we need to setup an event listener to handle Heroku's shutdown procedure (assuming we are going to be using Heroku for deployment).
  
  * Heroku uses a different signal for shutdown...namely, the `SIGTERM` signal which corresponds to the succinctly named 'Termination signal'. Let's setup one last listener to account for this.
  
```javascript
// For Heroku app termination
process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by heroku signal termination');
    process.exit(0);
  });
});
```
  
* Now we are fully covered and have procedures in place to gracefully shutdown the server in most circumstances, which should look something like this:
  
```javascript
// TERMINATION / EVENT LOGGING
// Nodemon restarts
process.once('SIGUSR2', function () {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
  });
});
// Application termination (ctrl + c)
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by user signal interrupt');
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by heroku signal termination');
    process.exit(0);
  });
});
```
  
#### Continue to [create Mongoose schema](3_schema.md)