# Angular Form Validation Directives
* AngularJS provides astounding support for forms and form validation.
  
* By default, Angular will evaluate forms and assign them a number of properties (directive values). These directives can be used to great effect when providing user feedback.
  
* Below is a list of some form related directives, and examples of where and how to use them:
  
### `novalidate`
* This one is simple, we will be performing form validation with Angular, as such, we don't want HTML5 to try to validate the form. By decorating the '<form>' element with the `novalidate` directive, we will prevent HTML5 from performing it's default validations:
  
```html
<form novalidate>
</form>
```
  
### `$pristine` / `$dirty`
* `$pristine` returns true if the user has not interacted with the element/form
  
* `$dirty` returns true if the user HAS interacted with the element/form
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="product.name">
</form>
<div>Touched : {{myForm.$dirty}}</div> <!-- initially false -->
<div>Untouched : {{myForm.$pristine}}</div> <!-- initially true -->
```
  
### `$valid` / `$invalid`
* Angular uses HTML5's default validation checking to assign either the `$valid` or `$invalid` directive to a form/element
  
* Curretnly there is no error checking built into the form, so checking it's validity at any point will be true.
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="product.name">
</form>
<div>valid : {{myForm.$valid}}</div> <!-- true -->
```
  
* Adding one of the HTML5 typed input fields will apply that default error checking and may result in a field becoming `$invalid`, e.g. email:
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="employee.name">
  <input type="email" name="email" ng-model="employee.email">
</form>
<div>valid : {{myForm.$valid}}</div> <!-- false -->
```
  
* In the above, the `type="email"` input will pattern match the entered value for "sometext@sometext", this is default HTML5 behavior, and Angular will use it to assess validity.
  
### `$error`
* Returns additional information about the error state of a form/element.
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="employee.name">
  <input type="email" name="email" ng-model="employee.email">
</form>
<div>Error : {{myForm.email.$error}}</div>
<!-- {"email" : true} -->
```
  
* When applied to the email field (as above), if the constraint is not satisfied it will return an object with a property of the failed constraint (e.g. "email"), and the boolean value `true`
  
### `ngDisabled`
* Akin to `ngShow`, this directive can be used to deactivate form elements based on some criteria:
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="employee.name">
  <input type="email" name="email" ng-model="employee.email">
  <input type="submit" value="Submit" ng-disabled="myForm.$invalid">
</form>
```
  
* Until the above form passes validation, the 'Submit' button will be disabled.
  
### `required`
* You can use the HTML5 `required` property to mark a field as required. If there is no value entered in the field, it will be `$invalid`:
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="employee.name" required>
  <input type="email" name="email" ng-model="employee.email" required>
  <input type="submit" value="Submit" ng-disabled="myForm.$invalid">
</form>
```
  
### `ng-minlength` / `ng-maxlength`
* Sets the min/max character length for a field:
  
```html
<form name="myForm" novalidate>
  <input type="text" name="name" ng-model="employee.name" required ng-minlength="4" ng-maxlength="12">
  <input type="email" name="email" ng-model="employee.email" required>
  <input type="submit" value="Submit" ng-disabled="myForm.$invalid">
</form>
```
  
#### Continue to [Providing User Feedback](2_user_feedback.md)
