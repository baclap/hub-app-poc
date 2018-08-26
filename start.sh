#!/usr/bin/env bash

npx webpack --config hub-app/webpack.config.js --mode development;
echo '';
echo '------------------------------------------------------------';
echo '';
npx webpack --config external-page/webpack.config.js --mode development;
echo '';
echo '------------------------------------------------------------';
echo '';
node server;
