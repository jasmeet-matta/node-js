const connectDb = require('./mongoConnection');
const express = require('express');
const app = express();
//to create a new object for deleting record using id
const mongodb = require('mongodb');
const PORT = 5000;

//middleware to parse data 
app.use(express.json());

app.get('/moto', async (req,res)=>{
    let data = await connectDb();
    let result = await data.find().toArray();
    res.send(result);
    console.log(result);
});

app.post('/', async (req,res)=>{
    let data = await connectDb();
    let result = await data.insertOne(req.body);
    console.log(result);
});

app.put('/:name',async (req,res)=>{
    let data = await connectDb();
    let result = await data.updateOne({name:req.params.name},{$set:req.body});
    console.log(result);
    if(result.acknowledged){
        res.send("record updated")
    }
});

app.delete('/:id',async (req,res)=>{
    let data = await connectDb();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    console.log(result);
    if(result.acknowledged){
        res.send("record deleted")
    }
});

app.listen(PORT, 
    () => console.log(`live on http://localhost:${PORT}`)
)