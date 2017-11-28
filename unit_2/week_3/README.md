### Week 3 - Persistence with SQL and JDBC

Monday:  Mysql/SQL [MAMP](MAMP/README.md), [SQL](SQL/README.md) - Basic Queries, [JDBC](JDBC/README.md), MVC/SQL Hello Employee

Tuesday:  [SQL](SQL/README.md) - DML, [JDBC](JDBC/README.md), [SQL-Web-GUI](SQL-Web-GUI/README.md)

Wednesday:  [SQL](SQL/README.md) - Joins, [AWS-EC2-MySQL](AWS-EC2-MySQL/README.md)

Thursday:  [SQL](SQL/README.md) - Aggregate Functions, [DAO](DAO/README.md), [MVC-SQL-CRUD](MVC-SQL-CRUD/README.md)

Friday:   [MVC-SQL-CRUD](MVC-SQL-CRUD/README.md)

#### Learning Objectives

* Install MySQL locally on your system as part of the MAMP (Mac/Apache/MySQL/P-languages) solution stack
* Use SQL to write both simple and join queries, and to perform Data Manipulation Language (DML) operations.
* Use JDBC to access SQL data from Java code.
* Install and configure MySQL on your remote server, and integrate SQL with a Spring/MVC aqpplication.

#### New Technologies
Relational Databases (sometimes called SQL Databases) remain the predominant data storage mechanisms for commercial applications of all kinds.  Proficiency with the SQL language is a must-have skill for any application developer.   In Java, we can use the JDBC (Java Data Base Connectivity) API to run SQL commands from our application code.

Eventually, we'll need to relate Java objects to the relational database records that persist their state.  One mechanism for this is to create a Data Access Ojbect whose methods intercede between Java and the database.  As part of this we my define classes for Object-Relational Mapping or ORM.
