const express = require("express");
const mongoose = require('mongoose');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect(' mongodb://localhost:27017')
const model = mongoose.model('patym',{
    name:"String",
    price:"Number",
})
app.get('/',(req,res)=>{
    res.json({
        msg:"Woking"
    })
})
app.post('/signup',(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const pass = req.body.pass;
    const token = jwt.sign({user:firstname},"bittu");
    res.json({msg:token});
})
app.get('/signin',(req,res)=>{
    const token = req.headers.token;
    const pass = req.headers.secret;
    const verify = jwt.verify(token,pass);
    res.json({msg:"success"})
})
app.put('/update',(req,res)=>{
    const newname = req.body.newname;
    const newlastname = req.body.newlastname;
    const newpass = req.body.newpass;

})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

