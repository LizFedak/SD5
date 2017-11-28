# Introduction to Services
* Services are used to encapsulate fucntionality that you want ot reuse in an applicaiton but that don't fit neatly into the MVC pattern.
  
* Services fall into one of two camps, either they are being used for networking, security or logging (in which case they are somewhat analogous to models), or they don't and they simply provide some utility/helper functions.
  
* In the most abstract way, services can be thought of as self contained, relatively well encapsulated classes which perform specific roles that don't quite fit in controllers because they don't respond to user interactions.
  
* There are three methods for defining services:
  * `factory` -> similar to the revealing module pattern.
  * `service` -> sort of like a new instance of a class.
  * `provider` -> typically used for configuration.
  
* Ultimately all three service types provide similar functionality. We will be focusing primarily on `factory`
  
### Creating a service
* We will create an example service that logs messages to console.
  
```javascript
// 1
app.factory('logService', function(){
  // 2
  var messageCount = 0;

  var log = function(message) {
    console.log(++messageCount + ": " + message);
  };

  var getMessageCount = function(){
    return messageCount;
  };

  // 3
  return {
    log : log,
    getMessageCount : getMessageCount
  };
});
```
  
* Lets review this service:
  1: Use the `Module.factory('name', constructorFunction)` method to create a new service.  
  
  2: Declare variables and functions associated with the services functionality. In this case:
    * a `log` function which prints the message number and the message in console.
    * a `getMessageCount` function, which returns the number of messages which have been logged.
  
  3: Expose public functions with an object. Just like in the revealing module pattern, we may want to keep some of our variables or methods private/protected, this pattern allows us to only expose the functionality we want to have exposed.
  
### Continue to [using services](_19_using_service.md)