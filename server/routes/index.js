const express = require('express');
const router = express.Router();

router.use('/api',require('./api/index'));

router.get('/', function(req,res){
    return res.end('hello this is Bond');
});



module.exports = router;