var mysql = require('mysql');

var connection = mysql.createPool({
    //properties
    connectionLimit:50,
    host:'localhost',
    user:'root',
    password:'',
    database:'medicine'
    
    });




exports.check=(req,res)=>{
    console.log('osa')
 connection.getConnection(function(error,tempCont)
 {
     if(!!error){
         tempCont.release();
     console.log('Error');
            }
            else{
                console.log('sucess');
                tempCont.query("SELECT * FROM medDetails",function(error,rows,fields){
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
 