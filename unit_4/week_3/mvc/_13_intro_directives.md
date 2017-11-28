# Introduction to custom directives
* Directives are among the most powerful and wide ranging aspects of AngularJS...they are also among the most confusing.
  
* Creating custom directives is analogous to creating HTML that has precisely the functionality you require.
  
* There are four kinds of directives, but only two of them are recommended for our use.
  * Element ('E'): Directives are full fledged HTML elements. The Angular team recommends the use of element directives when creating a component that is in control of the template:

```html
  <!DOCTYPE html>
  <html>
  <head>
    <title></title>
  </head>
  <body>
    <my-footer></my-footer>
  </body>
  </html>
```
  
    * in the example above `<my-footer></my-footer>` is a custom 'Element' directive
  * Attribute ('A'): Directives are attributes that modify HTML elements. The Angular team recommends you use an attribute directive when modifying/decorating an existing element:
  
```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  <div display-list="products"></div>
</body>
</html>
```
    * in the above example, `display-list="products"` is a custom 'Attribute' directive
  
* The other two directive types are Class ('C') and Comment ('M') directives, however these are used infrequently.
  
#### Continue to [create a directive](_14_create_directive.md)