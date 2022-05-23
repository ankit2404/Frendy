const express = require('express');
const router = express.Router();
const bannerController = require('../../../controllers/api/banner-controller');

router.get('/', function(req,res){
    return res.end('hello this is Bond');
});
router.post('/create',bannerController.banner_create);
router.get('/show',bannerController.banner_list);



module.exports = router;