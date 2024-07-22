const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
const user = req.headers.user;
const pass = req.headers.pass;
// const heal = req.query.heal;
console.log(user,pass);
if(user != "shashi" || pass != "pass"){
    res.status(400).json({
        "msg":"healthy"
    })}
res.send("you are healthy");
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})