'use strict';

const express = require('express');
const serve   = require('express-static');

const mainApp = express();
mainApp.use(serve(__dirname + '/main'));
const mainServer = mainApp.listen(8000, () => {
    console.log('Main server is running at %s', mainServer.address().port);
});

const secondaryApp = express();
secondaryApp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}); 
secondaryApp.use(serve(__dirname + '/secondary')); 
const secondaryServer = secondaryApp.listen(8001, () => {
  console.log('Secondary server is running at %s', secondaryServer.address().port);
});
