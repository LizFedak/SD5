### Configuration Variables
* Heroku configuration variables (or config vars) are injected into the application as arguments at runtime.
  
* Config variable values are not made explicit in the application and are thus not exposed to the public.
  
* For sensitive information like API keys, user names, passwords, database locations etc...it is best to store these values in config variables instead of hard coding them within your app.
  
* Heroku configuration variables can be viewed with the `heroku config` command. This will return a list of the keys and values stored:
  
```bash
> heroku config
=== some-appname-60518 Config Vars
DATABASE_URL:         mysql://b500f62577f112:eaba2b10@us-cdbr-iron-east-04.cleardb.net/heroku_386aa326cd1b116?reconnect=true
DB_HOST:              us-cdbr-iron-east-04.cleardb.net
DB_NAME:              heroku_386aa326cd1b116
DB_PASS:              eaba2b10
DB_USER:              b500f62577f112
```
  
* To read a specific configuration variable's value, use `heroku config:get VAR_NAME`
  
```bash
> heroku config:get DB_HOST
heroku_386aa326cd1b116
```
  
* To write a value to a new or existing config variable, use `heroku config:set VAR_NAME='value'`
  
```bash
> heroku config:set TEST='test'
Setting TEST and restarting ⬢ some-appname-60518... done, v14
TEST: test
```
  
* To delete a configuration variable use `heroku config:unset VAR_NAME`
  
```bash
> heroku config:unset TEST
Unsetting TEST and restarting ⬢ some-appname-60518... done, v14
```
  
* With the applications sensitive configuration data securely stored, all you need to do is access it. 
  
#### Continue to [7 - `process.env`](7_process_env.md)