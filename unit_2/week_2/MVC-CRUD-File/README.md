## Spring MVC C.R.U.D.
It's time at last to put those web skills you've been learning to use!  

### Overview
We are going to have you create a CRUD application, completely from scratch, in order to get a handle on what in the hell you've been doing this week. We aren't going to have you slap a backend on it (that will come later), for some this may be a bummer, but remember, the goal here is to get comfortable with building a web app, not persisting the data. We can however use the DAO pattern we have seen over the past two weeks to mimic the functionality of a database.

### The Application
The goal here is to have you implement C.R.U.D. (Create, Read, Update, Destroy), which is some of the most common behavior on the web (Facebook is basically nothing but CRUD for instance). It represents the states of persistence that almost every application has ([further reading for those interested][crudwiki]). Usually CRUD is associated with a database, but we don't want you worrying about one of those, so we are just going to use an array or map for persistence.

Your application should adhere to the MVC pattern. Benefits of the MVC pattern is similar to that of encapsulation. There is a separation of concerns between the individual elements that make up the model, view, and controller respectively. Changing code in one has no affect on the code in the others. Their interactions are discussed below.

##### MVC Elements
* The Model: Houses the data being used in the interaction. The data is received via the controller and passed on to the view.

* The View: Is what is displayed in the browser. For our purposes this will be a JSP or HTML document. These documents manipulate the models data and give it a user facing display.

* The Controller: The controller manages all of these interactions. It manipulates the model and passes this changed data to an appropriate view.

<img src="MVC.png" width ="300"/>

Below are a list of project starting points you can choose from:
* A media application (Music, Movies, Video Games).
* A sports application.
* A restaurant menu system.
* An inventory management system.

### Expectations
A finalized version of your project is due next Monday. We expect it to be pushed up to your branch in the SkillDistillery/Quad_2/week2/MVC-CRUD-File repo before your arrival Monday morning. Your app must be built using the Spring framework that we have discussed over the course of the week. When finished you also need to deploy the WAR to your AWS server and add a link to the project via your resume website. We have provided you with a rubric to gauge your completion of the project [here](MVCCRUDRubric.pdf).

**Be prepared to discuss your project with the class in a concise 5 minute presentation.**

We will be demoing an application Wednesday to give a clear idea of the expected functionality, as well as potential stretch goals you can achieve on your own. We will be using the restaurant menu system as a prompt, but feel free to choose a topic that interests you.

### Resources
You can find a collection of Spring [resources][resources] in the link provided. The resources are organized by category. In addition there are files to help you with your project set up in the XMLConfig repository a link to it is provided [here](../XMLConfig).



[resources]:https://github.com/SkillDistillery/SD-Core/wiki/Tutorials-and-References
[crudwiki]:https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
