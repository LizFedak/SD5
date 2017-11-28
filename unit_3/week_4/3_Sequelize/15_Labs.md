### Labs
#####Tasks
* The Task model model has a constraint that dictates a Task MUST have a UserId foreignKey associated with it when it is created. This means that you will usually need a UserId when accessing tasks.
  
* You will want to create the Task routes in their own file and then require the exported router into the routes/user.js file and append additional routes to it (this way you can mount them all with the '/users' prefix).
  
1: Create an 'index' route for Tasks which returns json of all of the Tasks associated with a user (`/users/:id/tasks`)
  

2: Create a 'create' route for Tasks which creates a new task for a user (`/users/:id/tasks`)
  
  
3: Create a 'show' route for Tasks which shows a specific Task for a specific user (`/users/:id/tasks/:tid`)
  
  
4: Create an 'update' route for Tasks which finds a specific task and updates it with the data provided (`/users/:id/tasks/:tid`)
  
  
5: Create a 'destroy' route for Tasks which finds deletes a specific task (`/users/:id/tasks/:tid`)
