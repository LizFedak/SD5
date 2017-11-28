### IO Employee Menu

#### Application Overview

Lets again look back at our evolving employee menu project. Up to this point we haven't had a way to save your employees. Everytime we exit out of the program any employees you created in a previous session are lost. We can get around this problem by writing our employee objects to a file after each run and subsequently loading this file each time we start the program. 

#### Learning Objectives
* File IO

##### User Story #1

Again similar functionality should already be in place:
* When 'List Employees' is selected all of the employees names should be displayed to console.
* When 'Hire Employee' is selected, the user should be prompted to enter the name of a new employee, this employee should be saved.
* When 'Fire Employee' is selected, the user should be prompted to select an employee, this employee should be removed from the
  list of employees.

##### User Story #2

When the user chooses to 'Quit' the current employees in the system should be written to the file named 'employee.dat'.

##### User Story #3

Upon starting the application again load the file called employees.dat into an array list. This will allow you to manipulate employees you have in the system from previous runs.
