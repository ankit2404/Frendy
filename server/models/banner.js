const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({

    festivalName:{
        type: String,
        required:true,
    },
    imageName:{
        type: String,
        required:true,
    },
    imageAbsolutePath:{
        type: String,
        // required:true,
    },    
    imageUrl:{
        type: String,
        required:true,
    },
    imgBase64:{
        type: String,
        // required:true,
    },
    type:{
        type: String,
        required:true,
    },
    videoUrl:{
        type: String,
        default:null,
        // required:true,
    }
    

 
}, {
    timestamps: true
});



const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;