### Clearing Cookies
If you want to remove a cookie, you need to remove it from the client browser's cache. As such, you need to add the clear to the response object. Simply use the `.clearCookie()` function and pass the name of the cookie as the argument:  
  
```javascript
res.clearCookie('testCookie');
```
  
#### Continue to [6 - Adding to an Existing Cookie](6_AddingToAnExistingCookie.md)