# myFlix-ClientSide 
this is a client side of myFlix app which is going to give the movie enthusiasts the possibility to get comprehensive information about movies and manage their profiles 

### project status 
This project is currently in development phase. The simplified, first version of ServerSide has been developed. However, the ClientSide development just started. A main view based on movie cards as well as movie view is developed.

### User stories
* As a user, I want to be able to access information on movies, directors, and genres so that I 
can learn more about movies I’ve watched or am interested in.  
* As a user, I want to be able to create a proﬁle so I can save data about my favorite movies. 
*mas a user, I want to be able to edit my personal info and also deregister whenever I want.

### Challenges and what I've learned with this project
* As a beginner, I could understand how the frontend JS frameworks work and how important they are. 
* I got a comprehensive understanding of react and different types of components in react
* Fully understanding of react hooks and their application
* I fully understood what is a building process and got familiar with some useful tools like parcel
* I could extend my knowledge in debugging the applications using Chrome DevTools 
* Understanding redux using its implementation was the highligh of this project for me!

### Installation and Setup Instructions 
Clone down this repository. you will need node and npm globally on your machine. 

## Install react and required dependencies
```
npm install --save react react-dom
npm install --save react-bootstrap
npm install react-router-dom
npm install redux --save
npm install react-redux --save
npm install axois
```
## Install parcel as the build tool
```
npm install -g parcel@next
```

## Run following command
```
parcel [path to index.html]
```
## When building process finishes, go to link:
[MyFlix Client](http://localhost:1234)

## Enjoy MyFlix

### Development Process of the Client-Side for Femmovies Application

#### Create React components for each view
* Main View routes to all sub views using react-router-dom
* Create functional component for each sub view // distinct functionality in view
* Use bootstrap Card component to create Movie card for each movie

#### Connect to database via axios
* Get data on movies and users from API using axios library

#### Use Redux for state management
* User & movie data is accessed and modified from different components --> Use redux to mangage state in one place (store)
* Same for favorite movies --> Has to be loaded once both user and movie data states are successfully set

#### Host application