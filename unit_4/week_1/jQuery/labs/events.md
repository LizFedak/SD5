## Labs

### DOM

### Basic form manipulation
0: Create an HTML document and include the jQuery library in a script tag.  
1: Within the body create a form element. The form should have inputs for firstname, lastname, age, a selector for gender, and a submit button.  
2: Using jQuery, bind a click event to the submit button. *Remember to prevent the default action of the submit button*  
3: Within the click function, target all of the input fields using a jQuery selector.  
4: Use the `each()` method to iterate over all the returned elements.  
5: With each element `console.log()` the value associated with that input element.  
6: Also inside of the on click event validate that the field is not empty. If it is chance the background color of the input box to red. *Even though the submit button is technically an input field, it should not turn red even though the value is null. Look at the jQuery documentation for .not()*  
7: Change the code inside of the click event to empty the DOM if all fields are filled out.  
8: Render the returned data into a list format using jQuery's ability to create DOM elements.

### Quiz

#### Overview
Lets make a simple true/false or this/that quiz application. We can use jQuery to handle the changes in the DOM as well as our events. A user should be prompted with a question as well as two buttons (true/false selection). Upon answering, provide the user with feedback based on if their answer was correct. The DOM should also hide the true/false button options and replace them with a next question button. You do not need to score a user, just keep providing them with random questions.

For inspiration check out these links:  
* **True/False** [quiz][TrueFalse]  
* **This/That** [quiz][ThisThat]

0: Create a HTML document for your quiz. You can pre populate some elements, like a div where the question will be inserted. Make sure to include jQuery in a script tag.  
1: Create two javascript documents. One to hold your question objects, the second will be your jQuery application logic. Questions can simply be objects with two properties. Store these question objects within an array.
```javascript  
{
  question: "Buzz Aldrin was the first man to urinate on the moon.",
  answer: "true"
}
```
2: On document load, set up your event listeners and display a random question from your array of objects. The question should be displayed. For now, even though it is bad practice, store the answer as a global variable. This will allow you to compare the users response.  
3: When the user selects their response, hide the true/false buttons.  
4: Notify the use if they were correct or incorrect.  
5: Add a next question button to the DOM. If you have it included in your HTML just change its visibility property. Try `.show` or `.toggle`.  
6: When the next question button is clicked repeat the process starting at step 2.  
7: If you want to provide the user with information about why they were correct or incorrect add a fact property to your object that displays appropriately.

## [Animation](../animation.md)


[TrueFalse]:http://quipoquiz.com/
[ThisThat]:https://www.buzzfeed.com/summeranne/quiz-is-this-a-bunny?utm_term=.kb3KQemQG#.ecE1QqMQx
