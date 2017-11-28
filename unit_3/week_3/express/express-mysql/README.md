## mySQL with Express

### Overview
In order to start persisting data we need to configure a connection to a mySQL database. Basic setup is quite simple and requires just a few lines of code. We are going to subsequently abstract this process a bit so that we continue to follow our MVC pattern.

### Basic configuration
Before we create a proper model we are going to test the connection to make sure things are working properly. To do this we are going to write some code in the app.js file.

* If you have a database already constructed get the name of the database as well as the log-in credentials. If not, create one now.

* Use npm to install the mysql package ``npm install --save mysql``.

* Use the require pattern to bring use mysql in your ``app.js`` file.
``// var mysql = require('mysql');``

* The first step is to create the connection credentials with the specific database as follows (You will need to substitute the correct information for your db):

```javascript
var con = mysql.createConnection({
   host     : 'localhost',
   user     : 'guest',
   password : 'guest',
   database : 'todoDB'
});
```

* Next you have to use a method ``con.connect``, which is available on the con  variable we just created, to actually establish the connection to the provided credentials.

```javascript
 con.connect(function(err){
  if(err){
    console.log('Error connecting to todoDb');
    return;
  }
  console.log('On Startup: MySQL Connection established');
 });
```
As the app starts it should either print that there was an error (the information provided was invalid), or that you successfully established the connection.

Thats all the set up we need!! It my benefit you to try a test query to see if I can properly execute sql commands. After we have connected we can call ``con.query`` to execute any sql query we desire. Below is an example of the entire process.

```javascript
var con = mysql.createConnection({
   host     : 'localhost',
   user     : 'guest',
   password : 'guest',
   database : 'todoDB'
});

con.connect(function(err){
 if(err){
   console.log('Error connecting to todoDb');
   return;
 }
 console.log('On Startup: MySQL Connection established');
});

con.query('INSERT INTO todos (content) VALUES ("test")');
```

### Creating a model
Now that we know we can establish a connection and execute queries we want to move this code into a model. Inside of the ``app_server/models`` folder create a ``mySQL.js`` file. We are going to create a method ``getConnection`` that establishes the connection and executes any query we pass as the callback function.

In this file use the require pattern to bring in mysql. Once that is complete use the export pattern to export a method called ``getConnection``.

```javascript
var mysql = require('mysql');

exports.getConnection = function(callback){

};
```

We now insert the ``mysql.createConnection`` as well as the ``con.connect`` code inside this method.

```javascript
var mysql = require('mysql');

exports.getConnection = function(callback){
  var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'guest',
    password : 'guest',
    database : 'todoDB'
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to todoDb');
      return callback(err);
    }
    callback(err, con);
  });
};
```

Now when we require the ``mySQL.js`` file into our controller files, we can call ``mySQL.getConnection()`` to establish a connection to the database. Additionally we can pass ``getConnection`` a callback function that executes a query to the db.

### Resources
* [npm mySQL docs][docs]

### [Todo](../../labs/todo.md)

[docs]:https://www.npmjs.com/package/mysql
