const connectDb = require('./mongoConnection')

const main = async ()=>{
    let data = await connectDb();
    data = await data.find({bhp:270}).toArray();
    console.log(data);
}

const insert = async ()=>{
    let data = await connectDb();
    let insetData = await data.insertOne({name:'Pol',bike:'Honda',bhp:250})
    console.log(insetData);
}

const update = async ()=>{
    let data = await connectDb();
    let updateData = await data.updateOne({bhp:270},{$set:{bhp:280}})
    console.log(updateData);
}

const deleteRecord = async ()=>{
    let data = await connectDb();
    let deleteData = await data.deleteOne({bhp:280})
    console.log(deleteData);
}

insert();  

//1- node CRUD
//2- nodemon CRUD.js -> live changes