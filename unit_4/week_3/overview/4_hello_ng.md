# Hello Angular
* AngularJS is a client side JavaScript framework. The design concept behind Angular's creation was: "What if HTML was designed for applications instead of documents?". As a result, AngularJS uses HTML to maintain state, blurring the lines between what is JavaScript and what is markup.
  
* To create our "Hello Angular", first create a 'hello.html' file. This is just a standard HTML document, like below:
  
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello Ng</title>
</head>
<body>

</body>
</html>
```
  
* Now, include the minified `angular.min.js` file in the head of your document (in script tags of course):
  
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello Ng</title>
  <!-- NOTE: Your angular.min.js may be somewhere else -->
  <script src="js/angular.min.js"></script>
</head>
<body>

</body>
</html>
```
  
* Now we can include some Angular in our markdown:
  
```html
<!DOCTYPE html>
<html ng-app>
<head>
  <title>Hello Ng</title>
  <script src="js/angular.min.js"></script>
</head>
<body>
  <h1>Hello {{"Angular"}}</h1>
</body>
</html>
```
  
* Open your 'hello.html' file in a browser. The resulting output should be "Hello Angular"
  
* All we did was add the `ng-app` attribute (called a directive in Angular), to our `<html>` element and insert mustache notation (called a data-binding in Angular) to the `<h1>` element. If you inspect the HTML with dev tools, you will see that Angular added some additional markup to our HTML:
  
```html
<!DOCTYPE html>
<html ng-app="" class="ng-scope">
<head>
  <style type="text/css">
    @charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate) {
      display:none !important;
    }
    
    ng\:form {
      display:block;
    }
    
    .ng-animate-shim{
      visibility:hidden;
    }

    .ng-anchor{
      position:absolute;
    }
  </style>
  <title>Hello Ng</title>
  <script src="../angular.min.js"></script>
</head>
<body>
  <h1 class="ng-binding">Hello Angular</h1>
</body>
</html>
```
  
* We will review this behavior in following sections, for now, the key take away is that Angular uses the HTML Markup to dynamically maintain the state of your application.
  
#### Continue to [review what we've seen so far](5_review.md)