'use strict';

const express = require('express');
const serve = require('express-static');

// Hub app gets its won static server on port 8000
const hubApp = express();
hubApp.use(serve(__dirname + '/hub-app'));
hubApp.listen(8000);
console.log('Hub app is being served from port 8000...');

// External page is served from a separate server on port 8001
// CORS must be enabled for hub app to load the page
const externalPage = express();
externalPage.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}); 
externalPage.use(serve(__dirname + '/external-page')); 
const externalPageServer = externalPage.listen(8001);
console.log('External page is being served from port 8001...');
