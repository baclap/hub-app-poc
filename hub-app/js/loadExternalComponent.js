const scriptCache = {};
export default function loadExternalComponent(url, name, module = 'default') {
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
