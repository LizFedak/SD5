# Providing User Feedback
* Just as important as validating user input, is improving user experience with a strong feedback loop. If a user is entering data into a form that is failing validation, they won't know that intuitively, you need to point it out.

### Use Styles
* Angular assigns classes to form elements which correspond to their state:
  
* **`ng-pristine`** => untouched
* **`ng-dirty`** => touched
* **`ng-valid`** => passing validation
* **`ng-invalid`** => not passing validation
  
* With these classes, you can change the css of form elements to provide feedback:
  
```html
<style>
  form.ng-dirty.ng-invalid { background-color: red; }
</style>

<form name="myForm" novalidate>
  <input type="email" ng-model="user.email" required/>
</form>
```
  
* The above form's input will be red once a value has been assigned to it, until that value passes validation it will continue to have this class applied to it.
  
* **NOTE**: You can delay this class assignment until the user has moved away from a specific field in a number of ways. The easies is to use `$touched` (which corresponds to the `ng-touched`) class. `$touched` will only be applied once a user has interacted with a form/element and moved away.
  
### Show Errors
* Proiding meaningful errors in text can help a user complete forms correctly.
  
* You've already seen that `$valid` and `$dirty` apply boolean values to an input. This means that we can combine these directives with `ngShow` to provide feedback for specific situations:
  
```html
<div>
  <ul>
    <li ng-show="myForm.email.$touched && myForm.email.$error.'email'">
      Email must be valid
    </li>
    <li ng-show="myForm.email.$touched && myForm.email.$error.'required'">
      Email is required
    </li>
  </ul>
</div>
<form name="myForm" novalidate>
  <input type="email" ng-model="user.email" required />  
</form>
```
  
* The above example illustrates how you can show specific error messages to the user once they have moved away from a form field for specific errors.
  
#### Continue to [lab](3_lab.md)