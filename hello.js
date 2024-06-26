const express = require('express')

//For Form-Encode Start
//const multer = require('multer');
//const upload = multer({ dest: '/' })
//For Form-Encode End

const api = express();

//For x-www Url Encode Start
api.use(express.urlencoded());
//For x-www Url Encode End

//For Reading JSON Start
api.use(express.json());
//For Reading JSON End

api.post('/',(req,res)=>{

//For Form-Encode Start
//api.post('/',upload.single('file'),(req,res)=>{
//For Form-Encode End

    //res.send("a : "+req.query.a);
    res.send("k : "+req.body.Id); //For Form-Encode,x-wwwForm Endcode,Json 

});

api.post('/',(req,res)=>{

    res.send("Post");

});

api.put('/',(req,res)=>{

    res.send("Put");

});

api.patch('/',(req,res)=>{

    res.send("Patch");

});


api.delete('/',(req,res)=>{

    res.send("Patch");

});

api.listen(8080,()=>{
    console.log("Server started");
})