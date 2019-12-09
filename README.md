## Space X App

![alt text](https://github.com/ColinRosati1/spacex-missions/blob/master/screengrab.JPG)
### Overview

A Simple React app using data from SpaceX missions. With this application, the user should learn
the SpaceX history, see all the launches, and eventually select information to share.SpaceX maintains an open
API documented in this page: https://docs.spacexdata.com/?version=latest

Task 

●	Use Redux
●	Main app has two components History & launches
●	History onclick  api display results
●	Launch onclick api display results
●	Launch Search interacts with redux store
●	Launch results onlclick displays launch detail modal

### Context

React, Redux, Flexbox, Jest, Enzyme 


### Proposed Solution

Create react app with two main async components. Both components list api results from redux store state.
Redux actions query api, seach api results. Components render different states based on store


### TODOS

Add more unit testing
Add integration testing with redux store
make more launch api performance optimizations test the following
    GET https://api.spacexdata.com/v3/launches/latest?pretty=true to reduce payload size
    GET https://api.spacexdata.com/v3/launches?limit=50 to limit the amount of results

### Steps to Run

1. Clone this repository
2. npm install
3. npm start



