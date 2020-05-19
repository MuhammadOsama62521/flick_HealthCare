

var mysql = require('mysql');
const jwt =require('jsonwebtoken')

var connection = mysql.createPool({
//properties
connectionLimit:50,
host:'localhost',
user:'root',
password:'',
database:'userDB'

});

exports.verify=(req,res)=>{
    
    console.log("undefined sucess")
    connection.getConnection(function(error,tempCont)
    {
        if(!!error){
            tempCont.release();
        console.log('Error');
        res.status(400)
            }
            else{
                
                tempCont.query("SELECT name FROM userdetails  WHERE email = ? AND password = ?",
                [req.body.email,req.body.password],
                function(error,rows,fields){
            
                    console.log("ROWs =>",rows)
                    if(!!error){
                                console.log('Error inside query' );
                                res.status(400).json({ err: "ERROR" });
                                tempCont.release();
                            
                            }
                            else if (rows[0]==null||rows[0]==undefined){
                                res.status(400).json({ err: "NULL ERROR" });
                                tempCont.release();
                        
                            }
                            else{
                                console.log('no error' );
                            
                                const token =jwt.sign({
                                    email:req.body.email
                                }, 'messegeissecret',{expiresIn:'1h'});
                            
                                res.json(
                                    { rows : rows ,
                                    Auth : token
                                    }
                                    );
                                    tempCont.release();
                            }
                });
                }
    });
}

// exports.scripts=(req,res)=>{
//     connection.getConnection(function(error,tempCont)
//     {
//         if(!!error){
//             tempCont.release();
//         console.log('Error');
//                }
//                else{
//                    console.log('sucess');
//                    tempCont.query("SELECT * FROM userdetails",function(error,rows,fields){
//                     tempCont.release();
//                     if(!!error){
//                                 console.log('Error inside query' );
//                                 res.status(400)
//                             }
//                             else{
                                
//                                 res.json(rows);
//                             }
//                 });
//                 }
//     });
//     }
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