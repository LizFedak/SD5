## jQuery with the DOM

### Overview
One of jQuery's primary benefits is the ease of which we can manipulate the DOM. The library provides us with a number of useful functions that allow us to write less code to execute simple tasks. We have seen the use of ``.hide()`` in a few examples previously. As a rule of thumb when manipulating the DOM we need to make sure the document has been fully rendered before trying to access its elements.

For existing elements all we have to do is target the element using a selector and then chain an action to it.

```javascript
$(`#myDiv`).html('This is my div');
```

### Creating new elements and appending them to the DOM
Sometimes we need to dynamically build elements and append them to the DOM.

```javascript
var $newDiv = $('<div>');
$newDiv.html('this is my new div');
$('body').append($newDiv);
```

Creating a new element is similar to how we select elements using jQuery. To target, we put the css selector that corresponds to an element in the page. To create we put the html tag that corresponds to the element we want to create.

```javascript
$('<h1>') : yields <h1></h1> ,the closing tag is automatically added.
$('<h1></h1>'): yields <h1></h1>, as we would expect.
$('<h1>Hello World</h1>'): yields <h1>Hello World</h1>
```

Once an element has been created we can save it into a variable and manipulate it as we see fit, before we append it to the document.

```javascript
var $h1 = $('<h1>');
$h1.attr('class', 'header');
$h1.text('Hello World');
$h1.css('color', 'red');
$('body').append($h1);
```
#### Methods
* `.each()`: takes a collection and callback function as an argument. Iterates over the elements in the collection and executes that function on each element matched by the selector.
```javascript
$('p').each(function(index){
    console.log(this.id + " " + index);
    $(this).html('woooo');
});
```
Inside of the the each function we can reference the current element with `this`. The `this` keyword gives you access to the raw HTML element, if we want to all additional jQuery methods on this individual element we can wrap this in the jQuery function.`$(this)`.

* `.attr()`: can be used to access the value of an attribute or set the value of an attribute.
```javascript
$('#myDiv').attr('name')      //returns the value of the name attribute on the HTML element
$('#myDiv').attr('name', 'sweet')      //sets the value of the name attribute on the HTML element
```

* `.append()`: adds an element you have created as a child of the selected element.
```javascript
  $('#myList').append('<li>new list item</li>');
```
Results in :
```html
  <ul id="myList">
    <li>new list item</li>
  </ul>
```

* `.wrap()`: adds an element you have created surrounding the targeted element.
```javascript
  $('#myList').wrap('<div class="list"></div>');
```
Results in :
```html
  <div class="list">
    <ul id="myList">
      <li>new list item</li>
    </ul>
  </div>
```

#### More Methods
* `.css()`: can be used to alter the css of a targeted element.
* `.html()`: gets the html contents from the selected element.
* `.text()`: get the text content of the selected elements.
* `.val()`: get the value associated with an input field.
* `.addClass()`: Adds a class property to the selected element.
* `.remove()`: removes the selected node from the DOM.
* `.prepend()`: adds an element you have created as the first child of the selected element.
* `.after()`: adds an elements after the selected element or elements.
* `.before()`: adds an elements before the selected element or elements.

The full list of methods can be referenced in the [jQuery API docs][jQueryDocs].

### Traversing the DOM

Similarly to js we can traverse the DOM using methods that jQuery has provided us. Once you have made a jQuery selection you can access other nodes up and down the tree, relative to the current selection.

* `.find()`: Finds all elements from the initial element that match an additional selector.
* `.parent()`: Find the parent of the selected element. Additionally `.parents()` finds all parent elements.
* `.children()`: Finds all the children of the selected element.
* `.siblings()`: Finds all the siblings of the selected element.
* `.next()`: Finds the next sibling of the selected element.
* `.prev()`: Finds the previous sibling of the selected element.


## [Labs](./labs/events.md)

[jQueryDocs]:http://api.jquery.com/
