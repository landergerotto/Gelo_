const express = require('express');
// const exterminator = require('../src/routes/exterminator');
const product = require('../src/routes/product')
const auth = require('../src/routes/auth');
const order = require('../src/routes/order');

module.exports = function (app) {
    app
        .use(express.json())
        // .use('/api/exterminator', exterminator)
        .use("/api/product", product)
        .use('/api/auth', auth)
        .use('/api/order', order)

}