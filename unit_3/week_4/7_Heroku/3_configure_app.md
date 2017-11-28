### 3. Configuring your first Heroku app
### ~FIRST TIME FROM SCRATCH BUILD~ --> Start Here
* Create a directory named 'herokuTest'
* Inside of the directory, run:
  * `express`
  * `npm install`
* Now let's make sure everything is working locally.
  * run `npm start`
  * navigate to `localhost:3000`, you should see the default Express welcome page
  
### ~With Existing Project~ --> Start Here
* We need to configure some things specifically for Heroku (so that Heroku will know how to handle the application we give it)

#### Configure `package.json`
* First, we need to add the versions of Node and npm we are using to our package.json (this will also let Heroku know that our application is a Node app)
  * To find out your versions, use the `node -v` and `npm -v` commands
  * Add an `"engines"` property to your package.json as below, listing the versions of node and npm
  * Also add a "start" script under `"scripts"` with the value `"node app.js"` to run your application:
```json
{
  "name": "herokuTest",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node app.js"
  },

  "engines": {
		"node" : "~4.2.1",
		"npm" : "~2.2.0"
	},

  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
```

#### Create a Procfile!
* Your Procfile will tell Heroku how to run your application the server it deploys it to.
  
* Create a new file simply called Procfile `touch Procfile`
  
* Inside of Procfile, add `web: npm start`. Now Heroku knows how to start your app. ( NOTE: It is 
crucial that you type `web: npm start` exactly as above)
  
* There is a built in tool that will allow us to test that everything is configured correctly called Foreman
  * In your terminal run `foreman start` inside of the root level of your application, you should see terminal output similar to:

``` bash
09:44:11 web.1  | started with pid 66123
09:44:12 web.1  | > herokuTest@0.0.0 start /Users/Kane/Desktop/herokuTest
09:44:12 web.1  | > node ./bin/www
```
* Navigate to `localhost:5000` and you should see your application's welcome page  

#### Configure `app.js` to listen on a dynamic `$PORT`
* We have been hard coding the port for our application to listen to, but Heroku will be giving us a different port dynamically when it starts our application.
  
* In order to use port 3000 locally and some other port in production, change your `app.listen()` to accept a `port` variable, then add this line in your app.js: 
  
```javascript
var port = process.env.PORT || 3000;

// ... Additional configuration

app.listen(port, function(){
      console.log('listening on ' + port);
});
```
  
#### Add to `.gitignore`
* Every time Heroku builds your application it will check your package.json for dependencies and install any modules it does not currently have. As such, we don't need to keep our node_modules
  
* Create a `.gitignore` if you don't already have one, and add `node_modules` to it.
  
##### Continue to [Deploy with Heroku](4_deploy_app.md)