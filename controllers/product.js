
var mysql = require('mysql');



exports.ProudctShow = (req,res)=>{
  var roll = req.params.id;

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM t_data where roll = " + roll, function (err, result, fields) {
      if (err) throw err;
      //console.log(result);
        res.send(result);
    });
  });

}

exports.ProudctList = (req,res)=>{
 
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM t_data", function (err, result, fields) {
      if (err) throw err;
      //console.log(result);
        res.send(result);
    });
  });

}

exports.ProudctUpdate = (req,res)=>{
    
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });


  var roll = req.body.roll;
  var nm = req.body.nm;

  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "update t_data set nm = '" + nm + "' where roll =  '" + roll + "'";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Data Updated");
      });
  });    

}

exports.ProudctAdd = (req,res)=>{

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });


  var roll = req.body.roll;
  var nm = req.body.nm;

  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO t_data (roll, nm) VALUES ('" + roll + "', '" + nm + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Data Inserted");
      });
  });

}

exports.ProductDelete = (req,res)=>{
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  
  var roll = req.params.id;

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "delete from t_data where roll = " + roll + "";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Data Deleted : " + roll);
      });
    });

    //res.send("Product Deleted..."+id);
}
