## Selectors

### Overview
jQuery uses CSS style selectors to target elements in the DOM. Selectors follow the syntax below:
```javascript  
  jQuery(selectorExpression);
  or  
$(selectorExpression);
```

Normally you will target elements by tag, class, and id.

Target by Tag: ``$('h1')``  
Target by Class: ``$('.myClass')``  
Target by ID: ``$('#myID')``  
Target by Attribute: ``$('div[name]')``  or ``$('div[name = "test"]')``  

You are however not limited to these. Any valid CSS selector can be passes into jQuery to access an element. An example can be seen below.

``$("ul li:first-child")``

If there is only one element that matches your selector a jQuery object of that element will be returned to you. However, if there are multiple elements in the DOM that match your selector, an array of jQuery objects will be returned.

#### Selecting multiple elements
You can select multiple elements at the same time by providing a comma separated list of elements to jQuery.

```javascript
$('h1,a,div')
```

#### Iterating over returned elements
Traditionally when we execute ``document.getElementsByTagName('p');`` a node list containing all of the matching elements on the page is returned. From here we have to iterate over this array to execute actions on these elements.

```javascript
  var pElements = document.getElementsByTagName('p');
  for(var i = 0 ; i< pElements.length; i++){
    pElements[i].style.display = 'none';;
  }
```
Similarly with jQuery a selector returns list of all the elements, but we no longer need to iterate over this list. By chaining an action to the selector we can act upon all the elements in the returned collection.

```javascript
  $('p').hide();
```

### jQuery Objects
When you use a selector a jQuery object is returned. If you choose to save this return into a variable it is standard practice to begin the variable name with the jQuery ``$`` notation.

```javascript
var $h1 = $('h1');
```
If there are multiple ``<h1>`` tags on the page your variable would store and array of jQuery objects.

### Events
jQuery can be used to bind events as well. We have already touched on one even handler, ``$(document).ready(function(){});`` the document ready function. Setting up other event listeners is just as easy, ``$(selector).event(function(){});``. When the event is triggered the code inside the callback function is executed. For example if we wanted to hide a div with id ``#myDiv`` on click we could write:

  ```javascript
    $('#myDiv').click(function(e){
      $('#myDiv').hide();
    })
  ```

With jQuery events you still have access to the event object injected into the callback function. Just as in standard JS we can access the element on which the click occurred with `e.target`. This however returns an HTML element object not a jQuery element object. The difference here is that we can't call jQuery methods on an HTML element. To get around this we can either do the full selector for the element inside of the function, `$(#myDiv)`, or reference the object with a this call, `$(this)`.

```javascript
    $('#myDiv').click(function(event){
        $(this).hide();
    });
```

A full list of jQuery events can be found [here][jQueryEvents]

You can also use ``.on()`` to add one or more events to an element. If you are in a situation where you want to remove an event from an element you can use the `.off()` function to remove all events, or specify them individually.

```javascript
  $('#myDiv').off();    //removes all events from element with id myDiv
  $('#myDiv').off('click');     //removes the click event of element with id myDiv
```

## [DOM](dom.md)


[jQueryEvents]:https://api.jquery.com/category/events/
