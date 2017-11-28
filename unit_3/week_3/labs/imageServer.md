## Image server

### Overview
We are going to construct a simple node/express web application that serves static image files to the browser based on the route we hit.

### Goals
* Get comfortable with creating a node express application from scratch.
* Using npm to install dependencies (express).
* Practice creating routes in the app.js file.
* Serve static images/html to the browser

#### User Story #1
The app listens on port 3000 and handles 404/500 errors by sending back the error as a string to the browser.   

*Hint: res.send()*

#### User Story #2
An index.html home page is served at ``localhost:3000/``.

*Hint: res.render()*

#### User Story #3
Add routes to your app that when hit display an image. For example if you were to type ``localhost:3000/image/happy`` into the browser an image happy.jpg would be rendered.

*Hint:* use res.sendFile() to respond with an image file.  

#### User Story #4
For each image route you create, add a corresponding link to your index.html page.

#### User Story #5
If no image exists at that URI, the user is provided with an error message.

#### Stretch Goals
Use parameters in such a way that you only need to write one ``app.get()`` route in your app.js file.
