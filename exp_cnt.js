const express = require('express');
const api = express();
const productRouter = require('./routers/product');



api.use('/product',productRouter.route);

api.listen(8080);