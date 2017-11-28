## jQuery SPA

#### Technologies
* Node
* Express
* jQuery
* Mongo

### Goals
* Get comfortable separating the business logic of your application with the api logic
* Structure your api routes according to RESTful standards
* Communicate with the db via your existing api routes

### Build an API
A good place to start with any application you build is creating your own API. For those of you who don't know, an API is a headless application that allows access to a database through predetermined routes. Routes should be semantically named, and respond with expected information. For example, if I was trying to obtain an employee's information by their id:

``
/employees/1002
``

I would expect a single Employee object returned to me. Additionally if I wanted all employees I would have a separate route for this named appropriately:

``
/employees
``
This I would expect to return a list of Employee objects.

Your api should be a completely separate entity from the rest of your project. For instructions on how to structure your project look [here](api.md).

### Build out DOM functionality with jQuery
Once your API is complete you will need to begin building out the client facing elements of your project. Build a single HTML index page, don't forget to include jQuery. In this HTML doc you can include as many js files as you need. You can also build out any HTML partials you want to include using `$.load()`. All user interactions should remain on the same page with content being accessed via `.load()` and `.ajax()` calls, and subsequently added and removed from the DOM with the appropriate jQuery methods.

### Requirements
* Create a headless (no front end) api application which communicates with the db and serves expected content
* API routes must follow RESTful protocols
* Build a single index.html page that communicates with your api via ajax requests
* Dynamically build the DOM content of your index.html page using jQuery.
* Persist your data to a Mongo DB.
* Mongo DB must have a document with an embedded document.

### Steps
**Track with Git**
Go through the familiar process of creating a repo on Github and pointing your local files to it. At some point something is going to break and its good to have prior versions accessible.

**Configuration**  
Make sure your project is properly configured by setting up a simple Hello World example.

**Database**
Build your database and think about what routes you will need to provide a user so that they can adequately access information from the database.

**Connect to mongo**  
In your app_api, create these routes and the appropriate db communication.

**Write scripts**
With your api built out, write scripts and add them to your index.html page. These scripts should fire ajax requests to your api when appropriate, as well as utilize jQuery DOM manipulation tools to dynamically render content to the browser.
