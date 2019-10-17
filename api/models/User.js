const mongoose = require('mongoose');


const newUser = new mongoose.Schema({
    ID:{
        type:String,
        required:true
    },
    PIN:{
        type:String,
        required:true
    }

});

const User = mongoose.model('User',newUser);

module.exports = User;