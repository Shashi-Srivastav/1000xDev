const express = require('express');
const bodyParser = require('body-parser')
const zod = require('zod');
const port = 3000;
const app = express();
app.use(bodyParser.json());
const schema = zod.string();
app.get('/',(req,res)=>{
    const name = req.body.name;
    const result = schema.safeParse(name);
    res.send(result);
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})