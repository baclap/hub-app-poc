#!/usr/bin/env bash

npx webpack --config main/webpack.config.js;
npx babel --no-babelrc secondary/module.js --out-file secondary/dist/module.js --presets=react;
node server;
