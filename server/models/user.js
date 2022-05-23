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
        required: true,
        unique:true,
    },
    address:{
        type: String,
        required:true,
    }, 
    area:{
        type: String,
        required:true,
    },
    cityName:{
        type: String,
        required:true,
    }, 
    cityId:{
        type: Number,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    imageAbsolutePath:{
        type: String,
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