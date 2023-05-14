const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase');
const schema = new mongoose.Schema({
    name: String,
    bike: String,
    bhp: Number
},{ collection: 'emp' });

const SaveRecord = async ()=>{
    const record = mongoose.model('emp',schema);
    let data = new record({name:'Pecco',bike:'Ducati',bhp:280});
    const result = await data.save();
    console.log(result);
}

const UpdateRecord = async ()=>{
    const record = mongoose.model('emp',schema);
    let data = await record.updateOne({name:'Cal'},{$set:{bhp:340}});
    console.log(data);
}

const DeleteRecord = async ()=>{
    const record = mongoose.model('emp',schema);
    let data = await record.deleteOne({name:'Cal'});
    console.log(data);
}

const FindRecord = async ()=>{
    const record = mongoose.model('emp',schema);
    //where condition for finding
    let data = await record.find({bhp:222});
    console.log(data);
}

SaveRecord();