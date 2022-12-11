# __Project Management System : An amazing website__
## NodeJs, MongoDB and ReactJs based project
Create a project management api solution:
- User can sign up and login with JWT
- After authenticating with JWT, they should be able to manage projects (CRUD)
- Under each projects, User can add tasks (CRUD).
- Users can share their project with multiple other users.
- Reporting route should be added, where if a user passes start and end date, they should be able to get day by day report for tasks added vs tasks completed each day.
- Reporting should use MongoDB aggregation function.

## APIs using NodeJs with JWT
- POST/signin
- POST/login
- POST/createProject
- GET/getProjects
- GET/getProjectsById/:id
- PATCH/updateProject/:id
- DELETE/deleteProject/:id

## Frontend with ReactJs
- login ['/login']
- signup ['/']
- home ['/home']
- report ['/report']

# Tech
- NodeJs
- ExpressJs
- MongoDB
- ReactJs

#screenshots
# SignIn
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/signup.png)

# Login
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/login.png)

# Login2
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/login2.png)

# add new project
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/added.png)

# upgate a project
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/update.png)

# update2 a project
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/update2.png)

# delete a project
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/delete.png)

# share a project with multiple users with their id
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/share.png)

# report status
![image](https://github.com/Yashaswi-Anand/Project-Management-System/blob/master/screenshots/report.png)

# Project links
API: localhost:5000
ReactJs: localhost:3000