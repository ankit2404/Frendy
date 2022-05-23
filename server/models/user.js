const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required:true,
    }, 
    city:{
        type: String,
        required:true,
    }, 
    state:{
        type: String,
        required:true,
    },
    avatar:{
        type: String,
        required:true,
    },
    pincode:{
        type: Number,
        min:100000,
        max:999999,
        required:true,
    }, 
    gender:{
        type: String,
        enum:['male','female'],
        required:true,
    } 
}, {
    timestamps: true
});



const User = mongoose.model('User', userSchema);

module.exports = User;