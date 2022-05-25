//create banner 
//show banner list
const Banner = require('../../models/banner');



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

module.exports.banner_create_image = async function(req,res){
    try {
        let new_banner = await Banner.create({
            festivalName:req.body.festivalName,
            imageName:req.body.imageName,
            imageAbsolutePath:req.body.imageAbsolutePath,    
            // imageUrl:req.body.imageUrl,
            imgBase64:req.body.imgBase64,
            type:req.body.type,
            videoUrl:req.body.videoUrl,
        })

        Banner.uploadedBanner(req,res,function(err){
            if(err){
                console.log('****Multer error: ',err);
            }
            if(req.file){
                //to upload new banner 
                new_banner.imageUrl = new_banner.bannerPath + '/' + req.file.filename ;
            }
            new_banner.save();
            console.log(`**upload sucessful`);

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