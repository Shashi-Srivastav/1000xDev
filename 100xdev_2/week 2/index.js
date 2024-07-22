const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;
app.use(bodyParser.json());
app.get('/',(req, res)=>{
    res.send('hfggggggggggggggghi')
})

app.post('/head',(req,res)=>{
    console.log(req.headers);
    res.send("recieved")
})

app.post('/sendrec',(req,res)=>{
    console.log(req.body.keyhai);
    res.json({
        name:"Shasgffghi"
    })
})

app.post('/body',(req,res)=>{
    console.log(req.body)//should be in raw and json
    res.send("recived body")
})

app.get('/query',(req,res)=>{ // for browser @get req to send data by user
    console.log(req.query.keykaname)
    res.send("recieved")
})
app.post('/query',(req,res)=>{// rec to hoga but only by postmon not browser  
    console.log(req.query.keykaname)
    res.send("recieved")
})

app.listen(port,()=>{
    console.log(`Listing on port http://localhost:${port}`)
})



//Map
// let arr = [1,2,3,4,5];
// function helper(i){
//     return i*2;
// }
// let ans = arr.map(helper);
// console.log(ans);