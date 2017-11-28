### Labs
* You should already have an application with a Sequelize backend that has a Users table. (if you don't, grab the example one from the Sequelize section)
  
1: Add passport to your application. Use the steps from earlier in this section to configure the dependencies.
  
  
2: Create an app_server directory (if you don't already have one).
  * Create and configure a views directory with handlebars
    * create:
      * index.handlebars
      * login.handlebars (a login form)
      * signup.handlebars (a signup form)
  * Create a routes directory and a loginRoutes.js file
  * create a controllers directory and a loginCtrl.js file
  
  
3: Create the following routes:
  1. an index route which displays index.handlebars
    * if a user has been passed with the context object, display the username, and password of the user. If there is no user, display 'No user'
  2. a 'GET' '/login' which renders the login form
  3. a 'POST' '/login' which authenticates a user from the form. If valid, send the user to the index route...if not, display a message that the login was not valid and stay on the form.
  4. a 'GET' '/logout' which logs the user out and redirects to index
  5. a 'GET' '/signup' which renders the signup form
  6. a 'POST' '/signup' which creates the new user, logs them in and renders the index