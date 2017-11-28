## EJS (Embedded Java Script)

### Including EJS
In your project folder run:

```bash
npm install --save ejs
```

In our app.js file we need to change the templating engine from the default, Jade/Pug, to ejs.

```javascript
app.set('view engine', 'ejs');
```

By default the project will look for a file in the views folder named ``layout.ejs`` to use as the default layout.

### Layout vs View
Layouts are typically the boiler plate code that you need to be included in every page of your application. We use the default layout of ``layout.ejs`` in the above example. Lets say that file contained this:

```html
<!doctype html>
<html>
<head>
  <title>EJS example</title>
</head>
<body>
  <%- include('index') -%>
</body>
</html>
```

Most of this file is straight forward html. What we haven't seen before is the ``  <%- include('index') -%>``. When we render the layout with ``res.render`` the contents of that ``index.ejs`` file are inserted where we see ``<%- include('index') -%>``. For example if my index.ejs page contains:

```html
<h1> Hello </h1>
<h2> <%=name%></h2>
```
Returning ``res.render('index', {name : 'Andrew'});`` will yield the full HTML page to the browser.

```html
<!doctype html>
<html>
<head>
  <title>EJS example</title>
</head>
<body>
  <h1> Hello </h1>
  <h2> <%=name%></h2>
</body>
</html>
```
This will display "Hello Andrew" in the browser.

### Context Object
When we render a view we pass it a *context object*, which will allow us to replace specific aspects of our code dynamically. This object is simply a key value pair that will correspond to the mustache notation in our mark up.  Example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title><%= title %></title>
	</head>
	<body>
		<header><%= header %></header>
		<p><%= content %></p>
	</body>
	</html>
```
```javascript
{
	title : 'EJS Example',
	header : 'Content Header',
	content : 'EJS is super awesome'
}
```
EJS notation which corresponds to the keys of our object will display on the page, resulting in our content appearing dynamically...but what if we needed to iterate over a dynamically sized collection? Or add some kind of logic?  

```html
<!DOCTYPE html>
<html>
	<head>
    <% if (title) { %>
		<title><%=title%></title>
    <% } else { %>
		<title>Welcome!</title>
    <% } %>
	</head>
	<body>
		<header><%=header%></header>
		<ul>
      <% fruits.forEach(function(fruit) { %>
			<li><%=fruit%>.</li>
      <% }); %>
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

### <% %> vs <%= %> vs <%== %>
* <% %> allows you to embed javascript code in the view.
* <%= %> is used to evaluate a js statement the write the text result, any html is escaped, to the browser.
* <%== %> evaluates the js statement then writes the raw result, including any html, to the browser.

### Resources
* [ejs npm package][docs]

[docs]:https://www.npmjs.com/package/ejs
