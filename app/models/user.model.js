const { strict } = require("assert");
let mongoose = require("mongoose");

let schema = mongoose.Schema({
    firstName: {
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique:true,
    },
    phoneNumber:{
        type:Number,
        min:"999999999",
    },
    imageUrl:{
        type:String,
    }
});

module.exports = mongoose.model('Users',schema);