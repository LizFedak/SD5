### Appendix A: The Express API Pattern
* Similar to the 'app_server' pattern we've been using for our Express applications, the 'app_api' pattern gives us additional organization for our code, increases encapsulation and seperates concerns.
  
* At the root level of your application, create an 'app_api' directory. This directory will contain all of the routes, controllers, and models which correspond to the API you are creating.
  
* Your file structure should look like this:
  
```bash
├── app.js
├── app_api
│   ├── config
│   │   └── config.json
│   ├── controllers
│   │   └── user.js
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   └── routes
│       └── user.js
└── package.json
```
  
* Later, when you create an actual application which will use the data in your api, you will place this information in an 'app_server' directory:
  
```bash
├── app.js
├── app_api
│   ├── config
│   │   └── config.json
│   ├── controllers
│   │   └── user.js
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   └── routes
│       └── user.js
├── app_server
│   ├── controllers
│   │   └── login.js
│   │   └── main.js
│   ├── views
│   │   └── index.handlebars
│   │   └── layouts
│   │      └── main.handlebars
│   └── routes
│       └── login.js
│       └── main.js
└── package.json
```
  
#### Continue to [Appendix B: Postman](Appendix_B.md)
