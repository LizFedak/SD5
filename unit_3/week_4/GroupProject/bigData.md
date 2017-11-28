#API Project

###Resources
* [Agile](agile.md)
* [Pair Programming](pair_programming.md)
* [Branch Workflow](git_workflow.md)  
* [RFP Option](README.md)

## Big DATA Option

###Overview
This project is less clearly defined then the other and relies on you to determine the ultimate scope and objective. That said, there are minimum requirements which will be stated below.  
  
The objective/real world use case is that you have a large amount of data that you have collected (we aren't going to collect it, so you will have to find an interesting data source for a large amount of existing data and use that) and you either want ot use it for your own purposes, or make it available to others to use. The key concept here is that data is valuable, if you develop a way for others to access it, you could theoretically charge them for the right to do so (we aren't going down that route, just an example). Your objective will be to structure this data in a Java application in such a way that it can be meaningfully retrieved through REST and used by a Node application which will generate reports, visualize the data, or use it in some other meaningful way.  
  
Your Java application will have predefined modes of access enabled (i.e. if you were using the World Development Indicators from the World Bank, you would expose the countries or Indicators in your database as a list, and allow the access to the data through one of those routes).

###Data Sources
The following lists either locations to find large datasets, or links to datasets themselves. Your first objective is to identify your data set, and determine how you will use it in a meaningful way (you don't have to choose from this list):  
* https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public
* https://www.reddit.com/r/datasets
* http://www.inside-r.org/howto/finding-data-internet
* http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators#
* http://www.data.gov/

###Constraints
The scope of this project is theoretically endless. In order to meet the learning objectives of Quad 3 we are placing several restraints on your approach, as well as setting milestones that you need to achieve on your path to a clearly defined Minimum Viable Product (MVP). This may seem unnecessarily cruel and unusual, but the reality is that on the job you will have goals set for you, deadlines to meet, style guides to follow, and technology constraints to abide.  
  
* You must store all of your data in the Java application, and access it from the Node application, you should not serve web content from your java project except for testing purposes.

###Milestones
* Bonus write some tests. You need some kind of test coverage over the key logic of your application. Jasmine/jUnit...  

##### Milestone #1: Roles set, tools configured and plan determined. (Do this together)
* Determine who your scrum master is.
* Determine how often you are going to stand-up, and how you will conduct stand-ups if one of you is remote.
* (One of you) create a public Github repository and invite your teammates as collaborators.
* One of you should create the projects your will need (i.e. a dynamic web project and an initialized Node project), push them to the repository, and have everyone else clone down. Now you shouldn't have any trouble with file structure when doing your work.
		* **BEFORE COMMITTING!!!!!!!!!!!** Add the following to a .gitignore file:
		  * `target`
		  * `.DS_Store`
		  * `node_modules`
		  * `credentials.js`
		  * `.settings`
		  * `.classpath`
		  * `.project`
		* ...hopefully this will help you avoid git conflicts down the line
    * It's up to you if you want to use two github projects (one for Java, one for Node), but make this decision before proceeding.
* Write a README.md file for your repository ([Markdown Cheatsheet][mdcheat]). Include:
    * Your names (or at least usernames).
    * The technologies you want to use.
    * The company you are building the app for.
    * Why you are building the application.
    * The methodologies you are using to build the application (group project, agile etc).
* Create a [Trello][trello] board and invite your teammates to it.
* Develop user stories from the requirement and add them to your Trello icebox.
* Build a wireframe for your site together.
* Slack a link to your Trello board, repository and your wireframe. (This counts as submitting your proposal)  

*The following steps do not need to be completed in order*  
##### Milestone #2: Schema developed and tested
* Determine the relationsips you will need for your database. Draw a schema that you will use for reference as you develop your application and distribute it to your team.
* Create and populate your database.
* Check that your relationships are correct with queries in mysql.
* Create a dump file to roll your database back to in the event that your lose data integrity.

##### Milestone #3: Set and test routes with Java
* Create a DAO and controller routes that will make your data accessible for the purposes you need.
* Item data is queried and returned to the view from your backend.
* Items display the number of items/tickets etc available from inventory.
* Items can be created, deleted, and updated.
* Item inventory can be changed.
* Users can login.
* Users can register
* Users can add and remove items from a shopping cart.
* Users can checkout.
* Java application is deployed to AWS.  

##### Milestone #4: Node can access and display data
* Web content is served from Node/Express.
* Item data is queried and returned asyncronously to the view (either through a server to server request, or directly with XHR).
* DOM manipulation is handled by JS (optional: templating engine is used to dynamically serve views)
* Cookies are stored for users who have not logged in and persisted when the user logs in / creates an account.
* Node application is deployed to AWS.  

  
[trello]:https://trello.com/
[mdcheat]:https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
