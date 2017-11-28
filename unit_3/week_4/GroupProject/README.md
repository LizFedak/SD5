# API Project

### Resources
* [Agile](agile.md)
* [Pair Programming](pair_programming.md)
* [Branch Workflow](git_workflow.md)  
* [Big DATA Project](bigData.md)

## RFP Option
### Overview
You work for a company that creates web applications for retailers based on their requirements.  

Your company has just received four RFPs, it's up to your team to select which company you would like to submit a proposal to.  

### Companies
##### Meta Clothing
A clothing retailer marketing primarily to hipsters and the Pabst Blue Ribbon drinkers of the world. They love to follow trends and appreciate a good scarf almost as much as a full beard.

##### Swole Foods
These fine food retailers (don't you dare call them grocers) repackage purportedly organic produce and sell it at 200% markup. Products include everything from honey scented foot cream to locally sourced grass fed kobe beef.

##### Macro Center
Always on the cutting edge of technology, this electronics parts distributer is revolutionizing the industry by doing exactly the same thing as all of their predecessors...only with more sponsored reviews and promoted products.

##### Intense Experience Retailer (IER)
Since 1998 this outfitter has been selling extreme sports enthusiasts the latest and greatest gear. Next year they plan on expanding into the revolutionary 'Felix Baumgartner Experience', a heart pounding jump from space, for the low low price of ~~$300,000.00~~ $299,999.99.

### Requirement Description
*The following requirement was provided by the company representative*  

>"We need a public facing website for our company. It needs to incorporate a modern, simplistic, sleek and user friendly design that has information about our company and employees. We would like it to have pictures of our staff as well as display a brief bio about them. The site should also have some way of getting in touch with us and our contact information (including a map or directions to our physical location).  
>  
>We also want a webstore. The store should display available items to all of our traffic. It's crucial that anyone be able to view our items and add things to their cart. For a user to checkout they need to create an account, or login to an existing one. We will need their physical shipping address (as well as billing if it is different), name, email (their email is their username) and password for each user. Cookies should store the cart items of users who haven't logged in (until they login), and we want to persist our registered users carts in our database. If a user goes to checkout, it should create an order record with that item.
>
>Ideally the application would also include inventory management. Our employees need our app to keep track of and manage our inventory. We also need a way to add new items to inventory, refresh our stock (i.e. add to the existing quantity of items), and change an item's availability (can it be viewed on the web store or not). Items that are out of stock should either indicate that they are out of stock, or not be presented in our website's store."

### Constraints
The scope of this project is theoretically endless. In order to meet the learning objectives of Quad 3 we are placing several restraints on your approach, as well as setting milestones that you need to achieve on your path to a clearly defined Minimum Viable Product (MVP). This may seem unnecessarily cruel and unusual, but the reality is that on the job you will have goals set for you, deadlines to meet, style guides to follow, and technology constraints to abide.  

Additionally, the company has asked that the data for their application be stored in a mySQL database. Due to security concerns they expect all user password information to be encrypted. They also requested that this data be served from a custom API. Separately, they would like to serve web content out of an Node/Express app (maybe they are thinking they'll use a front-end framework one day). Thus, you'll be creating two applications. One an API which stores all of your data and has routes which respond to requests with JSON. The other, a Node/Express app which serves all of the html/css etc but stores no data, instead accessing / updating it from the API app's routes.

### Milestones
* Bonus write some tests. You need some kind of test coverage over the key logic of your application. Jasmine/jUnit...  

##### Milestone #1: Roles set, tools configured and plan determined. (Do this together)
* Determine who your scrum master is.
* Determine how often you are going to stand-up, and how you will conduct stand-ups if one of you is remote.
* (One of you) create a public Github repository and invite your teammates as collaborators.
* One of you should create the projects your will need (i.e. a dynamic web project and an initialized Node project), push them to the repository, and have everyone else clone down. Now you shouldn't have any trouble with file structure when doing your work.
		* **BEFORE COMMITTING!!!!!!!!!!!** Add the following to a .gitignore file:
		  * `.DS_Store`
		  * `node_modules`
		  * `credentials.js`
		* ...hopefully this will help you avoid git conflicts down the line
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
* Determine the relationships you will need for your database. Draw a schema that you will use for reference as you develop your application and distribute it to your team.
* Create and populate your database.
* Check that your relationships are correct with queries in mysql.
* Create a dump file to roll your database back to in the event that your lose data integrity.
* Use sequelize to configure a JS ORM for your database schema.

##### Milestone #3: Set and test routes with API
* Create API routes that make your data accessible for the purposes you need (i.e. get products, creat user, login etc).
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
