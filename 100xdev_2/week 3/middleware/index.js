const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json());

function logkro(req,res,next){
    console.log("logkro middleware")
    next();
}
app.use(logkro);

function usercheck(req,res,next){
    const user = req.headers.user;
    const pass = req.headers.pass;
    const id = req.query.id;
    console.log("inside middleware 1");
    if(user != "shashi" || pass != "pass" || id != "2222"){
        res.status(400).json({
            msg:"auth failed"
        })
    }
    else next();
}
app.get('/',usercheck,(req,res)=>{
    console.log("inside main");
    const body = req.body;
    console.log(body);
    res.send("working")
})

app.get('/test',(req,res)=>{
    res.send("test route");
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})