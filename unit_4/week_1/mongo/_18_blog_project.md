# Blog Project
This is a short project to get more experience using MongoDB to produce a web application.  
  
### Objective
* Create a blog
* Your blog will have posts
* Posts have:
  * an author
  * some number of comments
  * some number of tags
  * a title
  * a body
  * a date of creation
* Comments have:
  * an author
  * a body
  * a date of creation
* User login is not a requirement of this project, however, if you find that you have finished the MVP quickly and are looking for more to do, you can restrict the ability to publish a post to an authenticated user.
  
### MVP
* Index page
  * The blog's index page should display a list of Posts in descending chronologival order (most recent first).
  
  * Display the post title, author, tags, and date created
  
  * When the title of a post is clicked, the user should be presented with the full post.
  
  * If a tag is clicked, all of the posts that have that tag should be displayed on the index page
  
* Post page
  * A post should display the full body of the post, the title, the date created, the author, and all associated comments
  
  * At the top of the comments section should be a form to create a new comment. The author name is optional (defaults to anonymous), and the body is required.
  
* NOTE! You do not have to accomplish full CRUD to fulfill the MVP...you really only need to be able to create and show things. If you accomplish this MVP quickly, move on to implementing update and delete as well.
  


