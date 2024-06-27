const express = require('express');
const product = new require('../controllers/product');
const router = express.Router();

router
.get('/',product.ProudctList)
.get('/:id',product.ProudctShow)
.post('/',product.ProudctAdd)
.patch('/',product.ProudctUpdate)
.delete('/:id',product.ProductDelete);

exports.route = router;