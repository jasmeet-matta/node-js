const mongoose = require('mongoose');
const empSchema = mongoose.Schema({
    name:String,
    bike:String,
    bhp:Number
},{ collection: 'emp' });

module.exports = mongoose.model('emp',empSchema);