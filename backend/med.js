var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors')
var axios = require('axios');
var router = express.Router();
const checkmethod =require('./check');
const login =require('./scripts')
app.use(cors());
app.use(express.json());


app.get('/',login.scripts)
app.get('/tabs',checkmethod.check)


module.exports = router;

//recieving data
app.post('/meddetails',function(req,res){
    console.log(req.body.email)
})
app.listen(1337);