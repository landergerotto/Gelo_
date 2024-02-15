const express = require('express');
const ProductController = require('../controller/ProductController');
const route = express.Router();

route
    .get('/', ProductController.getAllProducts)
    .get('/:id', ProductController.getProduct)
    .post('/', ProductController.create)
    .delete("/:id", ProductController.delete)
    
module.exports = route;