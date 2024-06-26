var mysql = require('mysql');

exports.ProudctShow = (req,res)=>{
  //  var id = req.params.id;
    //res.send("Product Details : " + id);
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
     res.send(result);
  });
});

}

exports.ProudctUpdate = (req,res)=>{
    res.send("Product Updated...");
}

exports.ProudctAdd = (req,res)=>{
    res.send("Product Created...");
}

exports.ProductDelete = (req,res)=>{
    var id = req.params.id;
    res.send("Product Deleted..."+id);
}
