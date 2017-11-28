#Git Workflow

###Resources
* [Git Cheatsheet][cheatsheet]
* [Branch Workflow Practice Application][branchapp]
* [Additional Git/Github Resources][resources]  

###Overview
You need to decide on how your team is going to use Git to collaborate.  
  
As you can imagine with multiple team members contributing code to a single application you have a higher likelihood of creating merge conflicts for one another. You can avoid these and make life easier for your team by using a predetermined workflow. There are several different approaches to this, but given the size of your teams I would recommend using a branch workflow.

###Branch Workflow
This method has you use branches for your features. It looks something like this:
* Create a branch named after the feature you are about to work on.
* Checkout the branch.
* Pull from origin master.
    * Resolve any merge conflicts.
* Write your feature code.
    * Each time you complete a component of the feature and it's working, stage and commit your changes.
    * Pull from origin master.
* When you've completed your feature, it works locally and you want to incorporate it into production code.
    * Pull from origin master.
    * Push your branch to origin.
    * Submit a pull request with a descriptive message.  
* Someone other than the individual who submitted the pull request should read through the submitted code and decide whether or not to merge in the pull request.
* If a pull request will create merge conflicts in your code, DO NOT PULL IT IN. Reject it, and send a message to whoever submitted it explaining why. Usually you will need to have them re-pull, re-push, and re-submit.  

#####Git commands:
* `git branch feature_name`
* `git checkout feature_name`
* Repeat these until your feature is done.
    * `git pull origin master`
    * `git add .`
    * `git commit -m "Added something in feature"`
* `git pull origin master`
* `git push origin feature_name`
* Now go to the github repository, and submit a pull request.


[cheatsheet]:https://github.com/SkillDistillery/SD-Core/blob/master/resources/git_cheatsheet.md
[resources]:https://github.com/SkillDistillery/SD-Core/blob/master/resources/github_resources.md
[branchapp]:http://pcottle.github.io/learnGitBranching/