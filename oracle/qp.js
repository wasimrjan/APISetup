var oracledb = require('oracledb');
const { environment } = require('../environment');

exports.ExecuteDML = async(sql)=>
{
    oracledb.autoCommit = true;
    var Conn = await oracledb.getConnection({
      user: environment.dbUser,
      password: environment.dbPassword,
      connectString: environment.dbConnection
  });

  Conn.execute(sql); 

  Conn.close();
}

exports.ExecuteQuery=(sql,param)=>
{
  return new Promise(async (resolve,reject)=>{

    var Conn = await oracledb.getConnection({
      user: environment.dbUser,
      password: environment.dbPassword,
      connectString: environment.dbConnection
  });

  oracledb.autoCommit = true;

  try{
      await Conn.execute(sql,param,{
        outFormat:oracledb.OUT_FORMAT_OBJECT},(error,result)=>{
        if(error)
          return reject(error);
        else
          return resolve(result.rows);
      }); 
    }catch{

    }
    finally{
      await Conn.close();
    }
  });
}

var a = function(){
  console.log("India");
} 

exports.a;