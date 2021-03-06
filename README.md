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
-  **Signup:** As an anon I can sign up to the app so that I can start organising my Party 
-  **Login:** As a user I can login to the app so that I can see my Bookings and manage them (edit, delete, add options) 
-  **Logout:** As a user I can logout from the app so no one else can use it
-  **View Places** As a user I want to see a list of all the available places and also a view of each place individually
-  **Create Booking** As a user I can create a Booking for that place 
-  **Edit Booking** As a user I can edit, adding or removing options to a booking (that is in my profile)
-  **Delete Booking** As a user I can delete a booking
-  **View User profile** As a user I can see my profile
-  **Edit User profile** As a user I can edit my profile





## Backlog
- calendrier

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/profile`                | ProfilePage          | user only  `<PrivateRoute>` | Shows the user profile, that also renders an edit form and show the list of bookings.  |     
| `/places`               | PlacesListPage     | user only `<PrivateRoute>`  | Page that shows all places in a list                | 
| `/places/:placeId`      | PlaceDetailPage    | user only `<PrivateRoute>`  | Page with the details of a place, and add to booking button , that open a bookingn form n the same page.  |
| `/profile/:bookingId` | BookingDetailPage     | user only `<PrivateRoute>`  | User can view one booking and manage it (add options, delete options, create options, delete the booking).|
| `/logout`                |LogoutPage           | anon only  `<AnonRoute>`    | Log Out, the user getout.  |
                                   


## Components

- HomePage
 
- LoginPage

- SignupPage

- PlacesListPage  
  * PlacesCard
  * View more button  

- PlaceDetailsPage
 * View the details of the place
 * Add to booking button
 * CreateBookingForm
 
-ProfilePage
 * BookingList
 * view more button 
 * EditProfileForm

- BookingDetailPage
  * EditBookingForm
  * DeleteBookingButton


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
  - placesApi.getPlaces()
  - placesApi.getPlacesDetails(placesId)

  
- Booking Service
-  - bookingApi.create(bookingId)
  - bookingApi.edit(bookingId, bookingBody)
  - bookingApi.delete(bookingId)
  

<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  Booking: [ { type: mongoose.Schema.Types.ObjectId, ref: "¨Booking" } ]
}
```

Places model

```javascript
{
  title: String,
  description: String,
  adresse: String,
},
```


Booking model

```javascript
{
  name: String,
  description: String,
  date : String,
  options: [string],
  place : { type: mongoose.Schema.Types.ObjectId, ref: "Place" } ,
  user :  { type: mongoose.Schema.Types.ObjectId, ref: "User" } ,
},
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {username, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/api/place`               |                              |                | 400          | get all places                                         |
| GET         | `/api/place/:placeId`           | {id}                         |                |              | Get one specific place       |
| POST        | `/api/booking`               | {place ID, options, description, title.. }       | 201            | 400          | Create and saves a new booking in the DB                   |
| PUT         | `/api/booking/:bookingId`           | {title, description, date, options}              | 200            | 400          | Edits booking in the DB                           |
| DELETE      | `/api/booking/:bookingId`          | {id}                         | 201            | 400          | Deletes project    |
| GET         | `/api/user`                 | {}                           | 201            | 400          | Sends user detauls                                             |
| PUT         | `/api/user/:userId`                  | {username, mail ...}            |                |              | Edits user                           |



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



