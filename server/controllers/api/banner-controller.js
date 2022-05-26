//create banner 
//show banner list
const Banner = require('../../models/banner');
const multer = require('multer');
const sharp = require('sharp');
const { response } = require('express');



module.exports.banner_create = async function(req,res){
    try {
        let new_banner = await Banner.create({
            festivalName:req.body.festivalName,
            imageName:req.body.imageName,
            imageAbsolutePath:req.body.imageAbsolutePath,    
            imageUrl:req.body.imageUrl,
            imgBase64:req.body.imgBase64,
            type:req.body.type,
            videoUrl:req.body.videoUrl,
        })

        return res.status(200).json({
            data:new_banner,
            message:`new banner sucessfully created`
        });

    
    } catch (error) {
        res.status(501).json({
            data:`internal server error : ${error}`
        });
    }
}

// module.exports.banner_create_image = async function(req,res){
//     try {
//         let new_banner = await Banner.create({
//             festivalName:req.body.festivalName,
//             imageName:req.body.imageName,
//             imageAbsolutePath:req.body.imageAbsolutePath,    
//             // imageUrl:req.body.imageUrl,
//             imgBase64:req.body.imgBase64,
//             type:req.body.type,
//             videoUrl:req.body.videoUrl,
//         })

//         Banner.uploadedBanner(req,res,function(err){
//             if(err){
//                 console.log('****Multer error: ',err);
//             }
//             if(req.file){
//                 //to upload new banner 
//                 new_banner.imageUrl = new_banner.bannerPath + '/' + req.file.filename ;
//             }
//             new_banner.save();
//             console.log(`**upload sucessful`);

//         })

//         return res.status(200).json({
//             data:new_banner,
//             message:`new banner sucessfully created`
//         });

    
//     } catch (error) {
//         res.status(501).json({
//             data:`internal server error : ${error}`
//         });
//     }
// }

module.exports.banner_list = async function(req,res){
    try {

        let data = await Banner.find();
        return res.status(200).json({
            data:data,
        });
    
    } catch (error) {
        res.status(501).json({
            data:`internal server error : ${error}`
        });
    }
}



const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    console.log("fat gya")
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = async (req, res, next) => {
  if (!req.file) return next();
  // file name of file
  req.file.filename = `user-mohit-pagal-j.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`upload/${req.file.filename}`);

  next();
};


module.exports.banner_create_image = async function(req,res){
    let new_banner = await Banner.create({
        festivalName:req.body.festivalName,
        imageName:req.body.imageName,
        imageAbsolutePath:req.body.imageAbsolutePath,    
        imageUrl:'abc',
        imgBase64:req.body.imgBase64,
        type:req.body.type,
        videoUrl:req.body.videoUrl,
    })
  if (req.file) {
    new_banner.imageUrl = req.file.filename;
  }

  console.log(new_banner)
  return res.send(new_banner)

}