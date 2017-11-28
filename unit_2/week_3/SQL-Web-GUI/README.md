### SQL Web GUI Project

**Build your own Relational Database Management System (RDMS)!!!**

### Technologies
You will need to use all of the following technologies to complete this project:
* Spring MVC
* SQL
* JDBC

### Overview
This week we are not only going to test your knowledge of SQL, but continue using Spring MVC. We are going to construct a GUI for a Relational Database Management System (RDMS), allowing a user to run ad-hoc queries and DML statements, and see the results as a web page.

### The Application
This application is going to give us a chance to learn SQL away from writing hundreds of SQL queries in command line. Our application should use JDBC to connect to your 'companydb' database we set up this week. An index page should provide a way for the user to enter any arbitrary SQL command (SELECT, INSERT, UPDATE, DELETE).  For a DML statement, display the count of affected rows.  For a query, display the results as an HTML table with column headers matching the columns from the SELECT statement.  Although you are outside of the MySQL command line, the metadata of the table is sent back with the result set. You should be able to access, parse and dynamically create an HTML table from the returned data.

### Expectations
 On Thursday we expect you to have your project source files pushed up to your branch in the SkillDistillery/Quad_2/week3/SQL-Web-GUI repo before your arrival Thursday morning. We also expect that you deploy the WAR file to your AWS server and provide a link to it so we can view your final product. We have provided you with a rubric to gauge your completion of the project [here](SQLGUIRubric.pdf).

 **If you do not push and deploy your files, you will lose credit on the assignment**
  
  
### [Example Project][ex]
  
[ex]:http://kriskane.ninja:8080/SQLGUI/
