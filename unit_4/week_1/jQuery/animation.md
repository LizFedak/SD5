## jQuery Effects

jQuery also has tools that allow us to do simple animations. There are a few preset methods that jQuery provides us.

* `$.fadeIn()`
* `$.fadeOut()`
* `$.fadeToggle()`
* `$.slideUp()`
* `$.slideDown()`
* `$.slideToggle()`

**example**
```javascript
$('#myDiv').click(function(){
     $('#otherDiv').slideToggle();
});
```

The naming conventions of these methods make them fairly self expiatory. Methods with the word toggle will check he current state of the element and then animate accordingly. There is also a more verbose animation method `$.animate()`. This method allows you to specify specific details about the animation your are executing.
``
$.animate({styles to change}[,speed][,easing][,complete]);
``
* **object**: Object of styles you want to change in key value format.
* **speed**: Duration of animation in milliseconds.
* **easing**: Linear or Swing options. Linear is consistent throughout animation, swing speeds up half way through.
* **complete**: Callback function that executes when animation is complete.

```javascript
$('#myDiv').click(function(){
    $( "#otherDiv" ).animate(
    {
      opacity: 0.25,
      height: "toggle"
    },
    2000,
    function() {
        // Animation complete.
    });
});
```
This is executing an animation exactly the same as the slide animation above. The difference is we have specified a change in opacity as well as a 2000 millisecond duration.


## [AJAX](./ajax.md)
