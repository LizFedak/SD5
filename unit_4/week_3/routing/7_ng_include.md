# `ngInclude` Directive
* `ngInclude` is used to include snippets of static HTML into your template.
  
* `ngInclude` is a light weight alternative to a custom directive if you require static templating to your `ngView`, but do not require it have any Angular functionality.
  
* `ngInclude` is an attribute directive that can be applied to any element. You will frequently find `ngInclude` combined with divs and other descriptive tags. The following example illustrates how it could be used to include a header on a page:
  
```html
<!-- home.view.html -->
<header ng-include="'partials/nav.html'"></header>
<div class="container">
  <h1>Home Template</h1>
  <h3>{{message}}</h3>
</div>
```
  
* Below is an example of what the included partial above could look like.
  
```html
<!-- partials/nav.html -->
<div>
  <a href="/#/">home</a>
  <a href="/#/about">about</a>
  <a href="/#/contact">contact</a>
</div>
```
  
* Now you can include this partial in each of your views to have a single point of well encapsulated header markup:
  
![include example](../imgs/ng_include.png)

#### Continue to ['pretty routes'](8_pretty_routes.md)