const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const BANNER_PATH = path.join('/uploads/banners');


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

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"..",BANNER_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      let ext = file.originalname.slice(file.originalname.indexOf('.'))
      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
  });
 // static functions  that can be used from anywhere in the class
 bannerSchema.statics.uploadedBanner = multer({storage:storage}).single('banner');//single  - > only one file will be upoaded for the name banner
 bannerSchema.statics.bannerPath = BANNER_PATH;

  
  const upload = multer({ storage: storage })

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;