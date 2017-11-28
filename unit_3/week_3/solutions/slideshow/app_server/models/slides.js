function Slide(name, film, year, imageLocation){
    this.name = name;
    this.film = film;
    this.year = year;
    this.imageLocation = imageLocation;
}

var slide1 = new Slide("Michael Keaton", "Batman", 1989, "/images/MichaelKeaton.jpg");
var slide2 = new Slide("Val Kilmer", "Batman Forever", 1995, "/images/ValKilmer.jpg");
var slide3 = new Slide("George Clooney", "Batman & Robin", 1997, "/images/GeorgeClooney.jpg");
var slide4 = new Slide("Christian Bale", "The Dark Knight",2008, "/images/ChristianBale.jpg");

var batmen = [];

batmen.push(slide1);
batmen.push(slide2);
batmen.push(slide3);
batmen.push(slide4);

module.exports = batmen;
