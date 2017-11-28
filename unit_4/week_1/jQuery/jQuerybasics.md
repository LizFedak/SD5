## jQuery Basics

### Getting started with jQuery
There are two ways to gain access to the jQuery library. The first is to link to the CDN (content delivery network) in your document.

```html
<script  
 src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js">
</script>
```

The second and our preferred way is to download jQuery [here][jQueryDownload]. Download jQuery 1.x if you need support for IE6-8. If not download the jQuery 2.x, this is a slimmed down version of the library. Download and save the jquery.min file locally. You can then path to it in your ``<script src="">`` tag to include it in your document.

```html
<script  
 src="jquery-2.2.3.min.js">
</script>
```

Now that the library is included in your document, you can begin using it in your scripts.

### The global jQuery function
jQuery is accessed via the global jQuery function. This function can be accessed using ``jQuery`` but has been aliased to ``$`` for your convenience. This is called "bling" notation. Basic syntax of a jQuery call is:

```javascript
$('body').hide();
```
Here ``$`` is the call to the global jQuery function, ``('body')`` is the selector, and ``.hide()`` is the action.

### Making sure the DOM has been rendered
As I am sure you have experienced, trying to access an element before the DOM has fully loaded can cause issues in your code. jQuery gives us a method that ensures the document has been fully loaded before trying to execute scripts. We have seen `Window.onload()` before which does something similar. The difference is that onload waits for everything included in the HTML to be loaded, (scripts, css, images), where `$(document).ready()` only waits for the DOM hierarchy to be completed.

The method ``$(document).ready()`` takes a callback function as an argument that executes ready event is triggered.

```javascript
$(document).ready(function(){
  // do stuff
});
```
There is an even sorter way of writing this function available to you:
```javascript
$(function(){
  //do stuff
});
```

## [HelloWorld](./labs/helloWorld.md)

[jQueryDownload]:http://jquery.com/download/
