### Using ClearDB
* ClearDB is a web based remote MySQL server host
  
* Heroku integrates with ClearDB to make adding a remote MySQL server as simple as running a few commands in terminal.
  
#### Setup Instructions
* Use the Heroku toolbelt to create the connection to the addon:
  
```bash
> heroku addons:create cleardb:ignite
----> Adding cleardb to app-name-0082... done, v18 (free)
```
  
* Now you can confirm that your database has been configured and added to your application by checking the application's configuration variables:
  
```bash
> heroku config
CLEARDB_DATABASE_URL => mysql://adffdadf2341:adf4234@us-cdbr-east.cleardb.com/heroku_db?reconnect=true
```
  
* That completes the initial configuration to add the mysql remote server to your project
  
#### Investigating the `CLEARDB_DATABASE_URL`
* The remote server location returned when the ClearDB is added to a Heroku application has a large amount of information which needs to be understood. Below is a dissection of the URL:
  
`mysql :// adffdadf2341 : adf4234 @ us-cdbr-east.cleardb.com / heroku_db ? reconnect=true`
    
`scheme :// username : password @ host / database ? options`
  
#### Continue to [6 - Heroku Configuration Variables](6_config_vars.md)