const { environment } = require('./environment');
const odb = require('./oracle/qp')
const express = require('express');
const api = express();

api.get('/',async (req,res)=>{

    // res.send(
    //     await 
    // odb.ExecuteQuery("select * from t_test where id = :id",{"id":1}));

  res.send(
         await 
     odb.ExecuteQuery("select * from t_test",{}));

});

api.post('/',async (req,res)=>{

    //res.send(
         
    odb.ExecuteQuery("insert into t_test values(:id,:nm)"
            ,{"id":7,"nm":"Node JS"});

    /*odb.ExecuteQuery("insert into t_test values(:id,:nm)"
            ,{"id":8,"nm":"Node JS"});
*/
    
      res.send("Data Saved...");      
        //);

});

api.listen(environment.apiPort);
