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



// app.post('/userd',function(req,res){
//     console.log(req.body.email)

//      console.log(req.body.password)
// })
app.post('/userd',login.verify)
// app.get('/login',login.scripts)
app.get('/tabs',checkmethod.check)
// app.post('/userd',login.scripts)

module.exports = router;

//recieving data

app.listen(1337);