# **RESTful API in Node.js (with Express.js)**

### **`Javascript RESTful API in Node.js.`**
<br>

###  Project for the occasion of D-CLIC Program just for build and deploy this API on [Heroku Website](https://heroku.com).

<br>

#

### **`Tools used to build the API`** :

  - NodeJS
  - Express.js – Fast, unopinionated, minimalist web framework for **[Node.JS](https://nodejs.org/en/)**

### **`Packages installed`** :

  -  nvm – Node Version Manager
  -  npm – Node Package Manager
  -  Node.js
  -  Express installed with npm (**_npm install express body-parser morgan_**).

## **`How to Use`** :


  - POST https://playerstats-api.herokuapp.com/api/v1/stats 
    -  This will create the stats a player

    ```json
    // this is the input examples
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    // and it will return json file like this
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    ```


  - GET https://playerstats-api.herokuapp.com/api/v1/stats/23 
    - This will get the stats for player 23

    ```json
    // it will return json file like this
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    ```
    
  - PUT https://playerstats-api.herokuapp.com/api/v1/stats/23 
    - This will update the stats for player 101

    ```json
    // this the input 
      {
        "id": 23,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    // and it will return json file like this
    {
        "id": 23,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    ```

  - DELETE https://playerstats-api.herokuapp.com/api/v1/stats/23
    -  This will delete the stats for player 101

    ```json

    // this the input 
      {
        "id": 101,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    // and it will return an empty json file

    ```

    
