const express = require("express");
const jwt = require("jsonwebtoken");        //Imported JWT library.
const jwtPassword = "123456";       //When creating a JWT using jwt.sign, you need a secret key to sign the token. This secret key is used to create a unique signature for the token, which ensures that the token cannot be tampered with. The signature is a combination of the token payload (e.g., user information) and the secret key, hashed together.

const app = express();

app.use(express.json());    //To decode the body


//In-Memory Data in Object named as ALL_USERS.
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "121",
    name: "Priya kumari",
  },
  {
    username: "sahilk64555@gmail.com",
    password: "123456",
    name: "Sahil Yadav",
  },  
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // We can also use FIND function in JS provided to iterate over it.
  let UserExist=false;

  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
        UserExist=true;
        break;
    }
  }
  console.log("True if user exist and false if user does not exist in the console: "+UserExist);
  return UserExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  
  //Providing JWT token to the specific user.
  var token = jwt.sign({ user: username }, jwtPassword);        //jwt.sign, It is used to create a JSON web token (JWT), When creating a JWT using jwt.sign, you need a secret key to sign the token. This secret key is used to create a unique signature for the token, which ensures that the token cannot be tampered with. The signature is a combination of the token payload (e.g., user information) and the secret key, hashed together.
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);     //jwt.verify, which is used to verify the authenticity and integrity of the JSON web token(JWT)
    const username = decoded.username;
    // return a list of users other than this username
    const OtherUsers=[];
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username!==username){
            OtherUsers.push(ALL_USERS[i]);
        }
    }
    res.json(OtherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token!",
    });
  }
});

app.listen(3001);