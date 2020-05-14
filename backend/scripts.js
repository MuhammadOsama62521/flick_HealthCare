
// var express = require('express');
var mysql = require('mysql');
// var app = express();
// // var cors = require('cors')
// var axios = require('axios');
// const router =express.Router();


var connection = mysql.createPool({
//properties
connectionLimit:50,
host:'localhost',
user:'root',
password:'',
database:'userDB'

});
exports.scripts=(req,res)=>{
    connection.getConnection(function(error,tempCont)
    {
        if(!!error){
            tempCont.release();
        console.log('Error');
               }
               else{
                   console.log('sucess');
                   tempCont.query("SELECT * FROM userdetails",function(error,rows,fields){
                    tempCont.release();
                    if(!!error){
                                console.log('Error inside query' );
                            }
                            else{
                                
                                res.json(rows);
                            }
                });
                }
    });
    }
// app.use(express.json());
// app.use(cors());
// app.use(express.json());
// app.get('/',function(req,res){
// connection.getConnection(function(error,tempCont)
// {
//     if(!!error){
//         tempCont.release();
//     console.log('Error');
//            }
//            else{
//                console.log('sucess');
//                tempCont.query("SELECT * FROM userdetails",function(error,rows,fields){
//                 tempCont.release();
//                 if(!!error){
//                             console.log('Error inside query' );
//                         }
//                         else{
                            
//                             res.json(rows);
//                         }
//             });
//             }
// });
// })
// app.post('/createmeddata',function(req,res){
//     console.log(req.body.email)
// })
// app.listen(1337);
//process.env.PORT