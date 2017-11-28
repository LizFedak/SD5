# Pretty Routes
* As you may have noticed, Angular uses 'hashtags' for it's routing. A frequent request is to remove this from sites.
  
* AngularJS provides a means to beautify our routes witht he `$locationProvider` service.
  
* **NOTE**: this approach is not supported by IE < 9.
  
* To remove the 'hashtag' from your routes, we will set our application to 'html5Mode' in the config, after injecting the `$locationProvider` service:

```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'home.view.html',
      controller: 'homeController'
    })
    .when('/about',{
      templateUrl: 'about.view.html',
      controller: 'aboutController'
    })
    .when('/contact',{
      templateUrl: 'contact.view.html',
      controller: 'contactController'
    })
    .otherwise({
      templateUrl: '_404.view.html'
    });

    $locationProvider.html5Mode({
      enabled: true, // turn html5Mode on
      requireBase: true // require a '<base> tag'
    });
})
```
  
* The `requireBase` property above is a best practice which assists legacy browsers in routing from the root of your application. Though not required it is recommended and will also assist with relative pathing.
  
* When `requireBase` is set to true, we also need to add a '<base>' tag in the head of the index.html, setting the base of our application:
  
```html
<!-- index.html -->
<!DOCTYPE html>
<html ng-app="routingApp">
<head>
  <title>Routing Ng</title>
  <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
  <script src="angular.min.js"></script>
  <script src="angular-route.min.js"></script>
  <script src="ngApp.js"></script>

<!-- SET BASE! -->
  <base href="/"> 

</head>
<body ng-view>
</body>
</html>
```

#### Continue to [routing lab](9_lab.md)