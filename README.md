# Unvoid-tech assignment assignment

<br>

## What we will use and what we can do ?
- this app is cartoon app where you can see cartoon images and their name
- for frontend we will use react
- for maintaining state will will be using redux
- this will be authenticated app you can't access without username password
- for example you can use like this credentials
- you can use any kind of username password that fine it will accept any username password
```js
username=raghuveersain
password=12345
```
- other than that you can use your own credentials but you have to login first then you can use this app
- this app will have two route one is default login route
- one route is home that will accessible for those user that are logged in only
- For authentication we are using redux that will take care of isAuth
- home page is wrapped under private route you can't access without logged in
- If you will try to log in without givin username password it will not allow you to go to home page
- In home page you have option of logout if you click on logout button you will be redirected to login page
- Now if you want to see again home page you need to login again first
- this is live link you can explore it 
- this app is deployed on vercel and here is deployed link

https://unvoidtech-three.vercel.app/


## Getting Started
- to start this project clone this repo in your local system
```js
https://github.com/sainRaghuveer/unvoid-tech-assignment.git
```
- then run this commands for getting started


```js
npm install
```

- this will install all dependencies

```js
Run this command to start in your local system

npm start
```
- this is how you can start locally in you system at http://localhost:3000

<br>

## Dependencies
- These dependencies we will be need during this project

### Dependencies for frontend if we are using ChakraUi in react application and redux
```js
"dependencies": {
    "@chakra-ui/icons": "^2.0.19",
    "@chakra-ui/react": "^2.6.1",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "framer-motion": "^10.12.12",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.11.2",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2",
    "web-vitals": "^2.1.4"
  }
```

<br>


# Screenshot
- here is screenshot you can see
## This will be default Route if anyone wants to access home page need to authenticate

<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/9d078ca1-6534-496c-9409-45ad21876bf6" alt="img"/>

<br>

## Application available in both light and dark theme
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/c7b32593-5d54-4934-9486-01983dec47e9" alt="img"/>

## This will be Login form need to login first you can use any kind of username and password but without logged in you can't access anything

<br>

## If you will try to login without giving username and password or if you will try to login it will show you this type of error
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/7a0a49ad-f9a0-4c0e-ab75-fe1d0d04a147" alt="img"/>

## When you will put username and password you will be redirected to this home page and if data is loading you will see skeleton

<br> 

## This is initial cartoon data you will see it will be data in first go and you can enjoy with your favoriute cartoons
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/dd746047-5fd9-4217-aefc-b29c15595ed3" alt="img"/>

<br>

## If you will try to go any other route that are not present in application you will get to see 404 page
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/d28a8523-4f9d-45ed-b7f3-a8e80d6f75c5" alt="img"/>


<br>![Screenshot (1019)]()





