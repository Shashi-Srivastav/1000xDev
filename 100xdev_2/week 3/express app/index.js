const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
res.send("hi");
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})