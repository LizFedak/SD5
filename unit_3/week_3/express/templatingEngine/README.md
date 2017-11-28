## Templating Overview

Start with the obvious...JavaScript is great for writing JS, and HTML is perfectly suited to write HTML.  

But what if we want to mix the two?  

We've dynamically added variables to HTML, or changed the content within an element before, but it's always involved either having our JS write our HTML or some convoluted way of including some JS in our mark up. That was back when we were focusing more on front-end JS. Now it's time to get more serious and think like server side programmers.  

Remember how JSTL worked? It's a bit like that. The default engine for Express is something called Jade/Pug. They do however leave the final decision up to the applications developer. This default setting can be reconfigured to use any templating engine we choose. We are going to take a look at two:

* [Handlebars](handlebars)
* [EJS](ejs)
