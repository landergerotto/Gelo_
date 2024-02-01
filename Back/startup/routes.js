const express = require('express');
// const exterminator = require('../src/routes/exterminator');
const fomiga = require('../src/routes/fomiga')
const auth = require('../src/routes/auth');

module.exports = function (app) {
    app
        .use(express.json())
        // .use('/api/exterminator', exterminator)
        .use("/api/fomiga", fomiga)
        .use('/api/auth', auth)
}