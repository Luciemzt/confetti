# confetti

Mac-Donald para crear fiestas.

Home Page : 
Selection from differents options: 
Bar - Café - Sitio Privados
 .More Details 


More Details / Sign Up / Login :
In order to access more details the user need to be signed in. 
If user signed in access directly to more details 
If not logged in the user neee to register or sign up

More Details : 
Name of the place 
Description 
Let's go for it ! => add the place to the user profile (create a duplicate that get affected to the user) 


Let's Go for it :
The user can now select option as (ballons, fireworks, alcool, Food... ) 
Yheay - all is ready ! 


Yheay - all is ready ! 
the user can edit, delete  is "booking". 

-----------------------------

If I have time: 
User can select dates. 

--------------------------



## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up to the app so that I can start creating my own projects
-  **Login:** As a user I can login to the app so that I can see my projects and manage them
-  **Logout:** As a user I can logout from the app so no one else can use it
-  **View Projects** As a user I want to see a list of my project and also a view of each project individually
-  **Add Projects** As a user I can add a project
-  **Edit Projects** As a user I can edit a project
-  **Delete Projects** As a user I can delete a project
-  **Add Tasks** As a user I can add tasks to a project
-  **Delete Tasks** As a user I can remove tasks from a project
-  **View User profile** As a user I can see my profile
-  **Edit User profile** As a user I can edit my profile


## Backlog
- ...

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/projects`               | ProjectsListPage     | user only `<PrivateRoute>`  | Page that shows all user´s projects in a list                |
| `/projects/add`           | AddProjectForm       | user only `<PrivateRoute>`  | New project form, adds a new project and redirects to projects list once project has been added |
| `/projects/:id`           | ProjectDetailPage    | user only `<PrivateRoute>`  | Page with the details of a project, an edit form, the tasks list, and a form to add new tasks |
| `/profile`                | ProfilePage          | user only  `<PrivateRoute>` | Shows the user profile, that also renders an edit form  |                                         


## Components

- HomePage
 
- LoginPage

- SignupPage

- PlacesListPage  
  * PlacesCard
  * DeleteProjectButton

- AddProjectForm

- ProjectDetailPage
  * EditProjectForm
  * TasksList
  * AddTaskForm
  * DeleteTaskButton
  
- ProfilePage
  * EditProfileForm

- Routes
  * AnonRoute
  * PrivateRoute

- Common
  * Navbar
  * Footer
  * Button...


## Services

- Auth Service
  - authApi.login(user)
  - authApi.signup(user)
  - authApi.logout()

- Places Service
  - placesApi.list()
  - placesApi.addProject(places)
  - placesApi.getProjectDetails(placesId)
  - placesApi.editProject(placesId, placesBody)
  - placesApi.deleteProject(placesId)
  
- Options Service
  - OptionsApi.addOption(projectId, optionsBody)
  - OptionsApi.deleteOption(projectId, optionsId)
  

<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  Places: [ { type: mongoose.Schema.Types.ObjectId, ref: "¨Places" } ]
}
```

Project model

```javascript
{
  title: String,
  description: String,
  options: [ { type: mongoose.Schema.Types.ObjectId, ref: "Task" } ],
},
```


Option model

```javascript
{
  name: String,
  description: String,
  status: Boolean,
},
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {username, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/api/projects`               |                              |                | 400          | Sends all projects                                         |
| GET         | `/api/projects/:projecId`           | {id}                         |                |              | Sends one specific project with its tasks (if any)        |
| POST        | `/api/projects`               | {title, description}       | 201            | 400          | Create and saves a new project in the DB                   |
| PUT         | `/api/projects/:projecId`           | {title, description}              | 200            | 400          | Edits project in the DB                           |
| DELETE      | `/api/projects/:projecId`          | {id}                         | 201            | 400          | Deletes project    |
| POST        | `/api/tasks/:projecId`                | {name,description, status}      | 200            | 404          | Adds a new task to a specific project |
| PUT         | `/api/tasks/:taskId`            | {name,description, status}                   | 201            | 400          | Edits a task in the DB                                                  |
| DELETE      | `/api/tasks/:taskId`            | {id}                         | 200            | 400          | Deletes task                                             |
| GET         | `/api/user`                 | {}                           | 201            | 400          | Sends user detauls                                             |
| PUT         | `/api/user/:userId`                  | {username ...}            |                |              | Edits user                           |



<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/yourgitusername/project-client)

[Server repository Link](https://github.com/yourgitusername/project-server)

[Deployed App Link](http://netlify.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)






Models:
User - Places - 



