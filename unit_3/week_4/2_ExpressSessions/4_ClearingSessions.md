### Removing a Session
* To actually remove a session, you can use `delete`:
  
```javascript
delete req.session.user;
```
  
* In many cases it is satisfactory to simply set the session value to `null`.
  
#### Continue to [5 - Flash Message](5_FlashMessage.md)
