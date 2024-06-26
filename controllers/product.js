exports.ProudctShow = (req,res)=>{
    var id = req.params.id;
    res.send("Product Details : " + id);
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
