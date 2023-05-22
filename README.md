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

- In this app I have used dummy data and created api for that so here you can see db.json that is deployed on render 
- This is deployed link as cartoon api that I used in this app it is deplyed on render that is why wnem you use it, it will take some time to fetch the data
 https://cartoon-ofto.onrender.com/cartoon
```js
{
  "cartoon": [
    {
      "id": 1,
      "title": "Mickey Mouse",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Mickey_Mouse_Disney_1.webp"
    },
    {
      "id": 2,
      "title": "Tom & Jerry",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Tom_and_Jerry_-_MP.webp"
    },
    {
      "id": 3,
      "title": "Bugs Bunny",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Bugs_bunny.webp"
    },
    {
      "id": 4,
      "title": "SpongeBob Square Pants",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/SpongeBob_stock_art-400x400"
    },
    {
      "id": 5,
      "title": "Homer J. Simpson",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Homer_Simpson.webp"
    },
    {
      "id": 6,
      "title": "Donald Duck",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Donald_Duck_Iconic-327x450.webp"
    },
    {
      "id": 7,
      "title": "Scooby-Doo and Shaggy Rogers",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Scooby_and_Shaggy-710x400.webp"
    },
    {
      "id": 8,
      "title": "Daffy Duck",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Sheldon.webp"
    },
    {
      "id": 9,
      "title": "Pikachu",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Road_Runner__1_-removebg-preview-310x510.png"
    },
    {
      "id": 10,
      "title": "Road Runner ",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Mickey_Mouse_Disney_1.webp"
    },
    {
      "id": 11,
      "title": "Fred Flintstone",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Fred.webp"
    },
    {
      "id": 12,
      "title": "Goofy",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Goofy_transparent.webp"
    },
    {
      "id": 13,
      "title": "Popeye, the sailor man",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/image-removebg-preview.png"
    },
    {
      "id": 14,
      "title": "Woody Woodpecker",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/9B0CF932-B823-44BF-84B2-257263D63E61.webp"
    },
    {
      "id": 15,
      "title": "Tweety Bird",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Tweety_SVG.png"
    },
    {
      "id": 16,
      "title": "The Powerpuff Girls",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/V.webp"
    },
    {
      "id": 17,
      "title": "Eric Cartman (South Park)",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Eric-cartman-554x510.webp"
    },
    {
      "id": 18,
      "title": "Garfield",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/GarfieldCharacter-657x1024.webp"
    },
    {
      "id": 19,
      "title": "Taz",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Classic-Taz.webp"
    },
    {
      "id": 20,
      "title": "Elmer Fudd",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Fudd.webp"
    },
    {
      "id": 21,
      "title": "Marvin the Martian",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/766551BC-31DE-4FDA-BB5E-7ABB65B057ED-296x510.webp"
    },
    {
      "id": 22,
      "title": "The Pink Panther",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/PInky.webp"
    },
    {
      "id": 23,
      "title": "Felix, the Cat",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/302900_231781686889200_1784968778_n.PNG.webp"
    },
    {
      "id": 24,
      "title": "Johnny Bravo",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Johnnyb001.webp"
    },
    {
      "id": 25,
      "title": "Dexter",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/DexterS1-2.webp"
    },
    {
      "id": 26,
      "title": "Winnie the Pooh",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Profile_-_Winnie_the_Pooh.webp"
    },
    {
      "id": 27,
      "title": "Sylvester The Cat      ",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Sylvester_the_Cat_SVG.png"
    },
    {
      "id": 28,
      "title": "Stewie Griffin      ",
      "image":"https://www.animaker.com/hub/wp-content/uploads/2023/03/FamilyGuy_Single_StewieBackpack_R7-409x510.webp"
    },
    {
      "id": 29,
      "title": "Space Ghost",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/03/Space_Ghost.webp"
    },
    {
      "id": 30,
      "title": "He-Man:",
      "image": "https://www.animaker.com/hub/wp-content/uploads/2023/04/HeMan.webp"
    }
  ]
}
```


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

## This is initial user data you will see it will be data in first go
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/88863574-499e-44b2-858a-e25d0c20bd1e" alt="img"/>


<br>

## this is compatible to every type of screen it will compatible to laptop and tablet and mobile also, you can see here it is compatible for atleast 320*480 sized view port

<br>

## you can click on user face to see user information you will get to see your username that you used while logging in and after click on logged in you will be redirected to login page again

<br>

## If you will try to go any other route that are not present in application you will get to see 404 page
<img src="https://github.com/sainRaghuveer/unvoid-tech-assignment/assets/112657812/d28a8523-4f9d-45ed-b7f3-a8e80d6f75c5" alt="img"/>


<br>





