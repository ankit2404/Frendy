const port = 8008;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const db = require('./config/mongoose');
const env = require('./config/environment');

app.use(cors())
app.use(express.urlencoded({extended:true}));
// app.use('/upload',require('./upload'));

app.use('/upload', express.static(__dirname + "/upload"));
app.use('/', require('./routes/index'));


app.listen(port,function(error){
    if(error){
        console.log(`error in runnning the server : ${error}`);
    }
    console.log(`backend server is running on port : ${port}`);
});