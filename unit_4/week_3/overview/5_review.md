# What we've seen so far
* So far we've seen two features of the Angular framework:
  
1: `ngApp`  

  * `ngApp` is a directive which auto-bootstraps (starts) an Angular application. `ngApp` is usually placed towards the top of the scope of an HTML document, but it's scope can be limited by placing it lower in the heirarchy. For instance, the following code will still produce our "Hello Angular" result: 
  
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello Ng</title>
  <script src="../angular.min.js"></script>
</head>
<body>
  <h1 ng-app>Hello {{"Angular"}}</h1>
</body>
</html>

```
  
2: `{{"Angular"}}`  
  
  * The value contained within the "mustache" (`{{ }}`) is referred to as an "Angular expression". The mustache notation itself is known as an "interpolation binding" (or "binding" for short).
  
  * Angular expressions differ from JS expressions in some significant ways:
    * Angular expressions are evaluated against a `scope` object, not `window`.
    * Angular expressions do not throw `ReferenceError`s or `TypeError`s, they simply evaluate to `undefined` and `null`
    * Angular filters can be applied to Angular expressions
    * No control flow (i.e. no loops, conditionals, exceptions)
    * No function declarations
  
  * Of course, angular expressions can return the result of operations. For instance:
  
```html
<!-- Arithmetic -->
<p>{{ 1 + 2 }}</p>
<!-- 3 -->

<!-- Concatenation -->
<p>{{ "a " + "b" }}</p>
<!-- "a b" -->

<!-- String methods -->
<p>{{ "banana".indexOf("n") }}</p>
<!-- 2 -->

<!-- assume user = {name : "Ben"} -->
<p>{{ user.name }}</p>
<!-- "Ben" -->

<!-- assume items = ["apple", "banana", "coconut"] -->
<p>{{ items[1] }}</p>
<!-- "banana" -->

<!-- Ternary Operator -->
<p>{{ ((1 + 1) == 2) ? "green" : "orange"}}</p>
<!-- "green" -->
```
  
#### Continue to [live bindings](6_live_bindings.md)