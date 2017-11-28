# Routing Lab
* We will continue building upon the Todo application from previous labs.
  
1: Create a configuration block in the same directory as your application's module.  
  
Download, import, and inject the `ngRoute` module dependency.  
  
2: Create the following routes, templates, templates and controllers:  
  
* ('/')
  * homeController
  * home.view.html
* ('/login')
  * loginController
  * login.view.html
* ('/register')
  * registrationController
  * register.view.html
* ('/todos')
  * todos.view.html
  * ...you already have a todosController, so just point at it
  
Move the code in your index.html into the 'todos.view.html', and assign a div within your body element the `ngView` directive.  
  
For now, just put an `<h1>` in each of the other views with that view's name.  
  
Run your application, and make sure that you can navigate to '/todos' and see your todo app (it should work precisely the same as before);  

3: Create a navigation partial in a partials directory. This can be as simple as several links, or a full fledged nav bar, the complexity is up to you.  
  
Use the `ngInclude` directive to add this navigation to each of your views.  
  
4: In your 'register.view.html', create a form:  
  
* Give the form a name
* create inputs for (type them appropriately):
  * username
  * email
  * password
* Add a submit button
  
* Create a registration (user creation) route and controller in your 'app_api'.
  
* Create a 'registrationService', and use it to create a user when this form is submitted.
  
* When the form is submitted and your API responds with a 201 status (created), use the `$location` service's `.url()` method in the callback to redirect to your todos view:
  
```javascript
.then(function(response){
  if (response.status === 201) {
    $location.url('/todo');
  }
});
```
  
5: In your 'login.view.html', create a form:  
  
* Give the form a name
* create inputs for (type them appropriately):
  * username
  * password
* Add a submit button
* **NOTE**: we will add functionality to this later, for now, just leave the form
  
6: Create some kind of a homepage. This can be anything you like, even as simple as a "Home" header.
  
