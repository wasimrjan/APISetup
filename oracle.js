var oracledb = require('oracledb');
const { environment } = require('./environment');

oracledb.getConnection({
      user: "wasim",
      password: "wasim",
      connectString: "(DESCRIPTION=(CONNECT_DATA=(SERVICE_NAME=xepdb1))(ADDRESS=(PROTOCOL=tcp)(HOST=127.0.0.1)(PORT=1521)))"
}, function(err, connection) {
if (err) {
    console.error(err.message);
    return;
}
     connection.execute("SELECT * FROM t_test",[], function(err, result) {
    if (err) { console.error(err.message);
          doRelease(connection);
          return;
     }
     //console.log(result.metaData);
     console.log(result.rows);
     doRelease(connection);
   });
});

function doRelease(connection) {
    connection.release(function(err) {
      if (err) {
       console.error(err.message);
     }
   }
);
}