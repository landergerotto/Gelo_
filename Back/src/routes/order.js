const express = require('express');
const OrderController = require('../controller/OrderController');
const route = express.Router();

route
    .post('/', OrderController.create)
    
module.exports = route;
