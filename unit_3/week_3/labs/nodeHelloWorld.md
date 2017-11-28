## Hello World with node.js

### Step 1
**Setup**

* Create a folder in terminal called helloWorldNode. This will be our projects root directory.
* Create a file called app.js.
* This file will be our entry point to the server.

### Step 2
**Require HTTP**

* Use the require pattern to access HTTP. This is a utility included with node.

When you are finished your app.js should look like this:

```javascript
  var http = require('http');
```

### Step 3
**Create a server**

* http has a function called create server. This utility takes an callback function. using the res object we can send information to the browser using the res.end call.  
* We can chain a function ``.listen()`` onto this ``app.createserver `` method.
* Tell the application to listen on port 3000.

hen you are finished your app.js should look like this:

```javascript
var http = require('http');

http.createServer(function(req, res){
    res.end('Hello World');
}).listen(3000);

```

### Step 4
**Running**

* In terminal execute ``node app.js``.
* You wont get any information returned in the console. In your browser go to localhost:3000 and you will see our ``Hello World`` message displayed.
* If you want to get your command prompt back in terminal press ``ctrl-c``.

### Next Steps
Well that was easy! As you can see node has simplified configuration that allows us to get up and running in just a few lines of code. Where things get a little more complex is routing in node. In a generic node application we have to use a long switch statement checking to see which route has been accessed and serve content appropriately. As you can imagine this becomes quite messy. This is where Express comes into play! Although it is slightly more configuration it provides us with a multitude of utilities that make developing a full web application much easier.

### [Express](../express)
