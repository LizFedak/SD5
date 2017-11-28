## Express basics

### Overview
Express is an npm package that will provide us with a web application server framework.

### Setting up express
Getting express into your node project is as simple as an ```npm install``` command. Create a node project folder and run the ```npm init``` command to create the ```package.json``` file. Once this is complete, run ```npm install --save express```. Inside of the ```package.json``` file you will see that express is now a dependency.

#### Scaffolding
Express comes with a generator command ``express`` or ``express filename`` that will auto generate the basis of a node/express application. The default file structure created by this command is as follows.

```bash
.
├── app.js
├── bin
│   └── www
├── expressScaffolding
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
This boilerplate code also makes the assumption that we are going to be using the default Jade/Pug as out templating engine. We however will not be using this utility or this templating engine. After we learn the basics of express, we will also be recommending a pattern that you follow for your future web apps.

### Requiring express
In our app.js file, which is the middleware configuration file, use the require pattern to bring in express: ```var express = require('express');```. Now set a variable named app equal to the the express function: ```var app = express();```.

Thats it! In two lines of code we have done all the configuration we need to start working on our js web application.

### Utilities
Express provides us with a number of utilities you will grow accustom to. Check out the [express API docs][expressAPI] for a full list of the functionality we inherit with the express module. We will primarily be using the functionality available with the app object we set up. The app object allows us to configure middleware, set up routes, render views and more.

### Hello World
Lets now walk through building a hello world example of an express application. [Express Hello World](../../labs/expressHelloWorld.md).

[expressAPI]:http://expressjs.com/en/api.html
