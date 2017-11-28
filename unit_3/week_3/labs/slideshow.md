## Slideshow

### Overview
Create a slideshow presentation that has a next and previous button to iterate over a simple list of data (remember presidents). You can choose what data to use for this exercise. Each element must have an image and some personal data about itself.

1: Create a node express project, follow the pattern we discussed previously for your project structure.

2: Configure the basics of the server in your app.js file.

4: Create a model for your data. We obviously don't have a database yet so this should be an array of objets that you will iterate over. These objects can be anything you want for example:
```javascript
function Slide(actor, film, year, imageLocation){
    this.name = actor;
    this.film = film;
    this.year = year;
    this.imageLocation = imageLocation;
}

var slide1 = new Slide("Michael Keaton", "Batman", 1989, "/images/MichaelKeaton.jpg");
var slide2 = new Slide("Val Kilmer", "Batman Forever", 1995, "/images/ValKilmer.jpg");
var slide3 = new Slide("George Clooney", "Batman & Robin", 1997, "/images/GeorgeClooney.jpg");
var slide4 = new Slide("Christian Bale", "The Dark Knight",2008, "/images/ChristianBale.jpg");
```

Store the objects you created into an array then use `module.exports` to make the array accessible using the require patter.

5: Require this array into your `.js` file in the controllers folder.

6: Create your main handlebars layout.

7: Create handlebars partials for 404/500 errors. Also create a view that will display the information of a single object from this array.

8: Create a route that takes a single URI parameter, a counter (`slideshow/:counter`). Use uri param to manipulate a counter variable, `/slideshow/1` should return the first object to be displayed.

9: Add a next and previous button to the page. Each button click increments or decrements this URI param by 1.
