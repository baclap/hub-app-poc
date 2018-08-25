function init() {
    const d = document.createElement('div');
    d.textContent = 'hello';
    document.body.appendChild(d);

    import('http://localhost:8001/module.js').then(module => {
        console.log('module from 8001', module);
    })
}
init()
