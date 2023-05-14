const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'myDatabase';
const collectionName = 'emp';

//async function to receive the promise
async function connectDb(){
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection(collectionName);
}

module.exports = connectDb;