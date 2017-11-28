### 4. Deploying your app!
* Heroku makes your life easy by using Git web hooks to deploy your application.
* Run `git init`
* `git add .`
* `git commit -m "init commit"`
* Now create the Heroku remote repository for your project: `heroku create`
  * This command creates a remote repository which Heroku will use to deploy your application. You should see some output like the following:
```bash
Creating app... done, stack is cedar-14
https://afternoon-retreat-79315.herokuapp.com/ | https://git.heroku.com/afternoon-retreat-79315.git
```
  * If you run `git remote -v` you will see that you have a new remote server listed for fetch and push named 'heroku'
* Now to deploy our app live to Heroku! Sounds tough right...
  * Run `git push heroku master`
  * Lots of output will follow this.
  * Start up a server dyno using the command `heroku ps:scale web=1` (with Heroku, you first dyno is free...after that it'll cost you)
  * Now run `heroku open`, and Heroku will navigate to your site in your default browser.
* That's it! It's that easy. If you want to make a change, you can add and commit it with git, and then repush to your `heroku master` and it will redeploy your site with the changes.  
  
##### Continue to [5 - Configure ClearDB](5_cleardb_config.md)
