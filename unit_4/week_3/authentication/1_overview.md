# Overview
* There are several ways to authenticate users with Angular. You could use Oauth, delegate login to a third party service...etc.
  
* For our purposes we will be using a strategy that involves JSON Web Tokens.
  
* JSON Web Tokens (JWT) are encoded strings which contain JSON data. 
  
* As Angular makes infrequent trips to the server (giving it incredible speed), our previous strategies using cookies are made obsolete (or at least trickier to implement). Without constant access to a request/response cycle over HTTP, we are forced to find an alternative way of storing user data on the client.
  
* To grant us easy storage/retrieval of our encoded JWT, we will use the browser's local storage, this is similar to how cookies are stored. When we need the user data we will extract the JWT, decode it, and access it's data.
  
#### Continue to [Review User Creation with Encrypted Password](2_api_user_ctrl.md)