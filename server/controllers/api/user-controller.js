// create user 
// show user list 
// show single user data
const User = require('../../models/user');

module.exports.create_user = async function(req,res){
    try {
        //check weather the an user with same email or number exists or not 
        let temp = await User.findOne(
            {
              $or: [
                     { email : req.body.email },
                     { number : req.body.number }
                   ]
            }
        );

        //if exists
        if(temp){
            return res.status(402).json({
                data:`user already exists`
            });
        }
        // if not then
        else{
            let user = await User.create({
                email: req.body.email,
                name:req.body.name,
                number:req.body.number,
                address:req.body.address, 
                area:req.body.area,
                cityName:req.body.cityName, 
                cityId: req.body.cityId,
                state:req.body.state,
                imageAbsolutePath:req.body.imageAbsolutePath,
                pincode:req.body.pincode, 
                gender:req.body.gender,
            })

            console.log(user);
            return res.status(200).json({
                data:user,
                message:'new user sucessfully created'
            });
        }



         





        
    } catch (error) {
        res.status(501).json({
            data:`internal server error : ${error}`
        });
    }
}

module.exports.single_user = async function(req,res){
    try {
        let user = await User.findOne();
        return res.status(200).json({
            data : user
        });


    
    } catch (error) {
        res.status(501).json({
            data:`internal server error : ${error}`
        });
    }
}

module.exports.user_list = async function(req,res){
    try {

        let user = await User.find();
        return res.status(200).json({
            data : user
        });
    
    } catch (error) {
        res.status(501).json({
            data:`internal server error : ${error}`
        });
    }
}