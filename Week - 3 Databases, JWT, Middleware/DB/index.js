const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://shashisrivastav95:Fu4E7xV9kyzeQxG3@cluster0.j2qp2y0.mongodb.net/",
);
const User = mongoose.model("User", {
  name: String,
  username: String,
  pass: String,
});
app.post("/signup", function (req, res) {
  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  console.log(password);
  const user = new User({
    name:username,
    pass:password
  })
  user.save();
  console.log(`User name :${user.name} + password ${user.pass}`);
  var token = jwt.sign({ username: user.username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
