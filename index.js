var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //res.write("Server Start At : 8080 Port");
  switch(req.url){
        case '/':
            res.setHeader("Content-Type","application/json");
            res.end('{"hello":"value"}');
            break;
        case '/hello/add':
            res.setHeader("Content-Type","application/json");
            res.end('{"hello":"add value"}');
            break;
        case '/kuchbhi':
                res.setHeader("Content-Type","text/html");
                res.end('<input type=text />');
                break;
        default:
            console.log("No Output");
  }


 // res.write('Hello World! Nahin Hello India this is true'); //write a response to the client
 // res.end(); //end the response
}).listen(8080); //the server object listens on port 8080