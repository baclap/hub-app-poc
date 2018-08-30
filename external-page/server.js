'use strict';

const express = require('express');

// External page is served from a separate server on port 8001
// CORS must be enabled for hub app to load the page
const externalPage = express();
externalPage.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
externalPage.use(express.static(__dirname + '/dist'));
const externalPageServer = externalPage.listen(8001);
console.log('External page is being served from port 8001...');
