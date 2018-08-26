'use strict';

const express = require('express');

// Hub app gets its won static server on port 8000
const hubApp = express();
hubApp.use(express.static(__dirname + '/hub-app'));
// matched UI routes serve the SPA
hubApp.get([
    '/dashboard',
    '/internal-page(/*)?',
    '/external-page(/*)?'
], (req, res) => res.sendFile(__dirname + '/hub-app/index.html'));
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
externalPage.use(express.static(__dirname + '/external-page')); 
const externalPageServer = externalPage.listen(8001);
console.log('External page is being served from port 8001...');
