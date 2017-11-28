## jQuery Hello World

0: Download the jQuery library from the jQuery website.  
1: Create an HTML document with a basic skeleton and include the jQuery library via a script tag.  
```html
<script  
 src="jquery-2.2.3.min.js">
</script>
```
2: Add a div to the body of the document and give it an id property.  
```html
...
<body>
    <div id="helloWorld">
    </div>
</body>
```
3: Write a script that used a selector to target the div you created by id.  
```javascript
<script>
  $('#helloWorld')
</script>
```
4: Check the docs for a method that allows you to set the contents of an element. **Hint: .html()**  
5: Set the content of the div you created to 'Hello World'.
```javascript
<script>
  $('#helloWorld').html('Hello World');
</script>
```

[jQuery API Docs][jQDocs]  

## [Selectors](../selectors.md)

[jQDocs]:http://api.jquery.com/
