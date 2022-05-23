const express = require('express');
const router = express.Router();

router.use('/v1',require('./v1/index'));

router.get('/', function(req,res){
    return res.end('hello this is Bond');
});



module.exports = router;