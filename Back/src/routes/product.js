const express = require('express');
const ProductController = require('../controller/ProductController');
const route = express.Router();

route
    .get('/', ProductController.getAllProducts)
    .post('/', ProductController.create)
    
module.exports = route;