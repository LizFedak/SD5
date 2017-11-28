## Labs

### AJAX

**WARNING**
Chrome does not allow ajax calls to local files by default. This is a security feature that is meant to protect you from cross-domain requests. When you are running and testing this program, do so in Firefox.

### Goals
* Successfully include and use jQuery in your projects
* Get comfortable dynamically building elements in the DOM using jQuery
* Use jQuery ajax calls to access local resources

#### Ajax basics

0: Create an HTML document `ajaxLabs.html` and a script file `jqAjax.js`. Make sure to include the jQuery dependency.  
1: Create a separate `.json` file that stores an array of your favorite objects.  
2: In your HTML document add a button element to the body. Don't forget to add an id property to the button.  
3: In your script file attach an event lister to the button you created.  
4: Inside of this event listener add an ajax request method, this will be a get, that retrieves the contents of the `.json` file you  created.  
5: Once you have the data returning refactor your success callback method to display the data on the screen. The data should be displayed as a list of the objects returned. (`<ul>`,`<li>`).  

#### Build a Table

When we start making asynchronous applications it is imperative we understand DOM manipulation. Without sending the user to a new view we have to dynamically add and remove elements from the page. jQuery provides us with a number of tools that make this process easier.

0: Create two files, `buildTable.js` and `index.html`. Your index page should include a single div with an id of table.

```html
<div id='table'></div>
```

2: Read in the file provided to you [here](tableData.json) using a jQuery.ajax() request.  
  
3: Once this data is successfully obtained, parse it and render it to the browser on load in table format.

```javascript
$(document).ready()
```
4: You will need to construct all the elements of the table dynamically, and append the finished table to the div (with id 'table') you created in your index.html. This includes proper table headers.

5: Apply Zebra striping to the table. (Rows should alternate between white and another color so viewers can easily distinguish content sections)

6: **Stretch Goal**
Add event listeners to your table so that when you click a columns header, the table sorts properly. Because each column in a row has information that corresponds to one another, you will have to re render the entire table when a single column is sorted.
