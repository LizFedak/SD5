### MVC SQL CRUD Project

**Database-Backed C.R.U.D. Application**

### Technologies
You will need to use all of the following technologies to complete this project:
* Spring MVC
* SQL
* JDBC

### Overview
You will write a web-form interface to a specific back-end database.

### The Application
A user accessing your application will be able to:
* Create (INSERT) a new employee.
* Read (SELECT) employees by last name (and possibly other fields).
* Update (UPDATE) an existing employee record.
* Delete (DELETE) an employee.

In this application we begin implementing Object-Relational Mapping (ORM).  Rather than passing around individual database column values for various operations, you'll define classes to represent database records.  For example, define an Employee class.  When an employee record is retrieved via SQL, use its values to instantiate an Employee object.

You are also encouraged to encapsulate all database operations in a Data Access Object or DAO, rather than hitting the database directly from your controller.

### Expectations
On Monday we expect you to have your project source files pushed up to your branch in the SkillDistillery/SD5/Quad_2/week3/MVC-SQL-CRUD repo before your arrival Monday morning. We also expect that you deploy the WAR file to your AWS server and provide a link to it so we can view your final product. We have provided you with a rubric to gauge your completion of the project [here](MVCSQLCRUDRubric.pdf).

 **If you do not push and deploy your files, you will lose credit on the assignment**
  
