const express = require('express');
const FomigaController = require('../controller/FomigaController');
const route = express.Router();

route
    .get('/', FomigaController.getAllArticles)
    .post('/', FomigaController.create)
    
module.exports = route;