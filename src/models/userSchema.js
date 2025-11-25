const mongoose = require('mongoose');

const USER = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,'please add the password'],
        minlength: [6, 'Password must be at least 6 characters'],
    }
});

const User = mongoose.model('user',USER);

//module exporting 
module.exports = User ;
