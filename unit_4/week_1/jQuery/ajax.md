## AJAX

### Overview
jQuery also gives us a utility that simplifies asynchronous XMLHttpRequest, the `.ajax` function. There are too many settings associated with this method to discuss them all, so we are going to focus on a few of the major ones.

The `.ajax` function allows us to specify details about our request in a concise format. It also allows us to execute actions based on the success or failure of the request.

### Loading html with Ajax
jQuery gives us a `.load()` function that allows us to load HTML documents into a page. The load function takes an argument that is the relative path to the html document you are trying to load. We can additionally include a optional selector specific to the HTML you are loading in. This allows you to load a specific part of a separate HTML document. The second is an
```javascript
  $('#contentDiv').load('partial.html');       
  //single argument: loads the contents of partial.html into an element with id contentDiv

$('#contentDiv').load('partial.html #header1');
  //multi arg: loads the element with id header1 in partial.html into the element with id content div
```

### Making an AJAX call
To make an ajax call we call the `.ajax` method on the jQuery namespace.

```javascript
$.ajax();
```
Inside of this method call we can specify settings, which is a collection of key/value pairs that allow you to customize the configuration of your request.

* type: Specifies the type of the HTTP Request (GET, PUT, POST, DELETE)
* url: Sets which url to hit when executing the ajax request
* dataType: Sets what data you expect to be returned from the server
* data: Add data to the request body
* success: what function to call if the request is successful

Below is an example of an ajax call where we configure these five settings:
```javascript
$.ajax({
    type: "POST",
    url: "rest/getEmployee",
    dataType: "json",
    data: { id : 21 },
    success: bankServicesData
});
```
There are many more things you can specify with in an ajax request but these are the 5 you will find yourself using over and over again. A complete list of what we can configure with an ajax call can be found [here][ajaxSettings].

#### Additional methods
Additionally we can chain methods to our ajax call. If we wanted to execute some code in the event the request were to fail, we can chain a `.fail()` method to the ajax method. This takes a callback function as an argument, to our previous ajax call to `rest/getEmployee`.

```javascript
$.ajax({
    type: "POST",
    url: "rest/Employee",
    dataType: "json",
    data: { id : 21 },
    success: bankServicesData
}).fail(function(){
    console.log('It blew up');
});
```

The ajax method returns a jqXHR object. This object can be assigned to a variable which you can subsequently call methods on. Two important methods exist on this object `.done` and `.fail`. As I am sure you can guess, `.done` is called if the request is successful and `.fail` is called if the request fails.

```javascript
var myReq = $.ajax({
  type: "GET",
  url: "rest/Employees",
  dataType: "json"
});

myReq.done(function( data ) {
  console.log('This is what was returned ' + data);
});

myReq.fail(function() {
  console.log('It blew up again');
});
```

### Simplifications of ajax
jQuery has also added some methods that further simplify ajax requests. Methods for GET and POST HTTP request have been added to the library. These can be used when you don't need to be as verbose with your request.

```javascript
$.get(url[, data][, callback][, type])
$.post(url[, data][, callback][, type])
$.getJSON(url[, data][, callback])
```

These methods take similar parameters:
* **url**: The URL to hit with a request
* **data**: Any additional information that we need to send as part of a request to the server.
* **callback**: The function to be called when data is returned
* **type**: what type of data to expect in the response.

Similarly there are shorthand methods like `$.getJSON()`. This is equivalent of an ajax call where we set the `dataType: json`. These convenience methods operate in the same manor as a standard ajax call, but with some settings taking default values specific to that method.

### Ajax with forms
Typically when you are submitting a form you would send a post request to a server with the data collected from the form. If we are using json the server will expect us to extract the information form the form and create a standard js object from this information. We can do this easily by extracting the values from the form via the name property of the elements. jQuery however provides us with a utility called `.serializeArray()` which extracts all information from a form and places it into an array of objects. For example with form
```html
<form id="myForm">
    <input name="fname" val="Andrew">
    <input name="lname" val="Conlin">
</form>
```
```javascript
  $(`#myForm`).serializeArray();

  //returns [{name:"fname",value:"Andrew"},{name:"lname",value:"Conlin"}]
```
This is not a standard js object, but we can easily convert it into one using the jQuery each function.

```javascript
  var object = {};
  var $formValues = $(`#myForm`).serializeArray();
  $.each($formValues, function(){
      object[this.name] = this.value;
  });

  //object ={fname:"Andrew",lname:"Conlin"}
```

## [Labs](./labs/ajaxLabs.md)


[ajaxSettings]:http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
