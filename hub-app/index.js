import React from 'react';
import ReactDOM from 'react-dom';

const container = document.createElement('div');
document.body.appendChild(container);

const scriptCache = {};
function loadScript(url, name, module = 'default') {
    let promise;
    if (scriptCache[url]) {
        promise = scriptCache[url];
    } else {
        promise = new Promise((resolve,reject) => {
            let script = document.createElement('script');
            script.onerror = event => reject(new Error(`Failed to load '${url}'`));
            script.onload = resolve;
            script.async = true;
            script.src = url;
            document.body.appendChild(script);
        });
        scriptCache[url] = promise;
    }
    return promise.then(() => global[name][module]);
}

loadScript('http://localhost:8001/dist/page.js', 'external-page')
    .then((Counter) => {
        ReactDOM.render(<Counter />, container);
    });
