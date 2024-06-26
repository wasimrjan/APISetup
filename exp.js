const express = require('express');

const multer = require('multer');
const upload = multer({ dest: '/' })

const api = express();
api.use(express.urlencoded());
api.use(express.json());

// api.post('/',upload.single('file'),(req,res)=>{

//     res.send('A : '+req.body.a);
   
// });


api.post('/',(req,res)=>{

    //res.send('Category : '+req.body.Category);

    console.log(req.body);

    //res.send('Json : '+JSON.stringify(req.body));

    //res.send('Category : '+req.body.subcat[1].SubCat);


    res.send('a : '+req.body.a);

    //res.send('a : '+req.query.a + ' b : '+req.query.b);

    //res.send('Header : '+req.headers.check);
});


api.get('/',(req,res)=>{
    //res.send('Hello India');
    //res.json({test:"India"});
    //res.sendStatus(404);

    res.send("Get");
    //res.send("India2");
});

api.post('/',(req,res)=>{
    res.send("Post");
});

api.put('/',(req,res)=>{
    res.send("Put");
});

api.delete('/',(req,res)=>{
    res.send("Delete");
});

api.patch('/',(req,res)=>{
    res.send("Patch");
});


api.listen(8080);