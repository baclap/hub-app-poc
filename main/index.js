import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;

const d = document.createElement('div');
document.body.appendChild(d);

import(/* webpackIgnore: true */ 'http://localhost:8001/dist/module.js').then(module => {
    console.log('module from 8001', module);
    const Counter = module.default;
    ReactDOM.render(<Counter />, d);
});
