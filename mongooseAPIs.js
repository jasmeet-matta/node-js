const express = require('express');
require('./config');
const emp = require('./schema');
const app = express();
const PORT = 5000;
app.use(express.json())

app.post('/create',async (req,res)=>{
    let data = new emp(req.body);
    const result = await data.save()
    console.log(result);
    res.send(result);
});

app.get('/list',async (req,res)=>{
    let data = await emp.find();
    res.send(data);
    console.log(data);
});

app.delete('/delete/:_id',async (req,res)=>{
    let data = await emp.deleteOne(req.params)
    res.send(data);
    console.log(data);
});

app.put('/update/:_id', async (req,res)=>{
    let data = await emp.updateOne(req.params,{$set:req.body})
    res.send(data);
    console.log(data);
});

//getting results based on search key
app.get('/search/:key',async (req,res)=>{
    let data = await emp.find({
        "$or":
        [
            {name:{$regex:req.params.key}},
            //for multiple field search
            {bike:{$regex:req.params.key}},
        ]
    });
    res.send(data);
    console.log(data);
});

app.listen(PORT, 
    () => console.log(`live on http://localhost:${PORT}`)
)