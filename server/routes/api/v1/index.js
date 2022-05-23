const express = require('express');
const router = express.Router();

router.use('/user',require('./user'));
router.use('/banner',require('./banner'));

router.get('/', function(req,res){
    return res.end('hello this is Bond');
});



module.exports = router;