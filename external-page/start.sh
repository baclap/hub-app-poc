#!/usr/bin/env bash

npx webpack --config external-page/webpack.config.js --mode development;
echo '';
echo '------------------------------------------------------------';
echo '';
node ./external-page/server;
