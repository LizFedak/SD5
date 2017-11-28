### Labs
* In you Sequelize application:
  
1: Create an `app_server` directory.
  * place a `routes`, and a `controllers` directory inside of it
  * create a `views` directory and configure handlebars
  
  
2: Create a 'signup.handlebars', which consists of a form with a username, and two password fields, as well as a submit button.
  
  
3: Create client side logic which grabs the form data, and submits it as a post request asynchronously (use an XMLHttpRequest) to '/signup'
  
  
4: On the server side, create a 'signup.js' in your routes and in your controllers directories.
  
  
5: Create a 'GET' route ('/signup') which navigates to the signup form. (eg. `res.render('signup')`)
  
  
6: Create a 'POST' route ('/signup') which uses Request to hit your Users API and create a new User.
  
  
7: Refactor your solution to #6 by checking both of the password fields, if they do not match, flash a message to the user that their passwords must match.
  
