# Express Handlebars

### Including Handlebars
In your project folder run:

```bash
npm install --save express-handlebars
```

In our app.js file use the require pattern to bring in express-handlebars and then set it as the default templating engine as follows:

```javascript
var handlebars = require('express-handlebars')
	.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
```

Above we have specified a default layout ('main.handlebars') which will be used automatically unless we either specify a different layout, or no layout (`res.render('landing', {layout: 'landingPage'});` or `res.render('landing', {layout: null});`).

``res.render`` takes the name of the handlebars file as an argument, without the extension. By default it looks for these files in a folder names views in the application root. Handlebars layouts should be in a subdirectory of this folder called ``layouts``. This terminology will make more sense as we move forward.

Use the '.handlebars' extension on view files which will use handlebars. If you wish, you can change this to something else using this syntax:  

```javascript
var handlebars = require('express-handlebars').create({extname:'.hbs'});
```

### Layout vs View
Layouts are typically the boiler plate code that you need to be included in every page of your application. We set a default layout of main.handlebars in the above example. Lets say that file contained this:

```html
<!doctype html>
<html>
<head>
  <title>Todo</title>
</head>
<body>
  {{{body}}}
</body>
</html>
```

When we render a view using ``res.render`` the contents of that ``.handlebars`` file is inserted where we see ``{{{body}}}``. For example if my 404.handlebars page contains:

```html
<h1>404 - Page Not Found</h1>
```
Returning ``res.render('404');`` will yield the full HTML page to the browser.

```html
<!doctype html>
<html>
<head>
  <title>Todo</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
</body>
</html>
```

### Context Object
When we render a view we pass it a *context object*, which will allow us to replace specific aspects of our code dynamically. This object is simply a key value pair that will correspond to the mustache notation in our mark up.  Example:  
```html
<!DOCTYPE html>
<html>
	<head>
		<title>{{title}}</title>
	</head>
	<body>
		<header>{{{header}}}</header>
		<p>{{{content}}}</p>
	</body>
	</html>
```
```javascript
{
	title : 'Example',
	header : 'Content Header',
	content : 'A paragraph about all sorts of sundry <b>nonsense</b>'
}
```
Handlebars' mustache notation which corresponds to the keys of our object will display on the page, resulting in our content appearing dynamically...but what if we needed to iterate over a dynamically sized collection? Or add some kind of logic?  

```html
<!DOCTYPE html>
<html>
	<head>
		{{#if title}}
		<title>{{title}}</title>
		{{else}}
		<title>Welcome!</title>
		{{/if}}
	</head>
	<body>
		<header>{{{header}}}</header>
		<ul>
			{{#each fruits}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
	</body>
	</html>
```
```javascript
{
	title : 'Example',
	header : null,
	fruits : ['Apple', 'Banana', 'Coconut']
}
```

In the above example, we use a conditional and a loop, this syntax is not wildly different than JSTL.  

### Separating Concerns
We can pull out the content of the context object into separate js files. These files help us keep our controller(s) skinny by separating out the view content into it's own file.  

```javascript
var about = 	{
								title : "About",
								header : "About Us",
								about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
								location: {
									street: "4500 W 33rd St",
									city: "Washington",
									state: "DC",
									zip: "20002"
								}
							};

exports.getAbout = function() {
	return about;
};
```

This file can then be required in our controller and it's json made available through the exported function:  

```javascript
var about = require('./lib/about.js');
```

To pass the json herein as a context object, simply build a json object in your route and invoke the 'get()' to return the json object:  

```javascript
app.get("/about", function(req,res){
	res.render('about', {page : about.getAbout()});
});
```

### {{}} vs {{{}}}
If you only wish to include text content with mustache notation, use the double `{{}}` mustache notations. If however you wish to include html, use the triple `{{{}}}` to ensure that it is rendered.  

```javascript
var contact = 	{
								title : "Contact",
								header : "Contact Us",
								form: "<form name='contactForm' class='contactForm'><input type='text' placeholder='Name' name='name'/><br /><input type='email' placeholder='Email' name='email'/><br /><textarea rows='5' cols='50' placeholder='Message...' name='message'></textarea><br /><input type='submit' name='submit' value='Submit'/></form>",
								script: "<script src='js/contactHelper.js'></script>"
							};
```  

### Resources
* [Handlebars docs][docs]
* [Syntax highlighting for handlebars][syntax]


### [Slideshow](../../../labs/slideshow.md)

[docs]:https://github.com/ericf/express-handlebars
[syntax]:https://github.com/daaain/Handlebars
