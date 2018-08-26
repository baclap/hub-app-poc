'use strict';

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'page.js',
        library: 'external-page',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    // Exclude react and react-router-dom from the bundled code and instead expect
    // them to be defined on window at the values given in the below configuration.
    // This reduces the bundle from ~260kb to ~11kb.
    externals : {
        react: 'React',
        'react-router-dom': 'ReactRouterDOM'
    }
};
