'use strict';

const express = require('express');

// Hub app gets its won static server on port 8000
const hubApp = express();
hubApp.use(express.static(__dirname + '/dist'));
// matched UI routes serve the SPA
hubApp.get([
    '/',
    '/dashboard',
    '/internal-page(/*)?',
    '/external-page(/*)?'
], (req, res) => res.sendFile(__dirname + '/index.html'));
hubApp.listen(8000);
console.log('Hub app is being served from port 8000...');
