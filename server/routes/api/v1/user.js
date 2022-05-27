const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/user-controller');

router.get('/', function(req,res){
    return res.end('hello this is Bond');
});
router.post('/create-user',
    userController.uploadUserPhoto,
    userController.resizeUserPhoto, 
    userController.create_user);
router.get('/get-user',userController.single_user);
router.get('/all-user-data',userController.user_list);




module.exports = router;