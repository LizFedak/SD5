### Using Sessions to flash messages
* In the extremely basic example that follows, a user will navigate to the '/newError' route which populates the session with a flash message. Here we are just populating a String, but we could pass a full object with more properties or identifications (ie. success vs error). When the user goes to the '/error' route the session's flash is transferred to the 'locals' object and then the session is cleared.
  
```javascript
app.get("/newError", function(req,res){
	req.session.flash = "SOME ERROR!!!!";
	res.render('index');
});

app.get("/error", function(req,res){
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	res.render('index');
});
```
  
* If we add a simple handlebars conditional to our `application.handlebars` layout, any errors will be displayed just below the header of our application:
  
```html
<!doctype html>
<html>
	<head>
		<title>{{{page.title}}}</title>
		<link rel="stylesheet" href="vendor/css/normalize.css"/>
		<link rel="stylesheet" href="css/layout.css"/>
		<link rel="stylesheet" href="css/404.css"/>
	</head>
	<body>
		<header>
			<div class="heading"><a href="/">Handlebars</a></div>
			<ul>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/store">Store</a></li>
			</ul>
		</header>
		{{#if flash}}
		  <strong>{{flash}}</strong>
		{{/if}}
		<div class="container">
			{{{body}}}
		</div>
	</body>
</html>
```
  
#### Continue to [Labs](6_Labs.md)