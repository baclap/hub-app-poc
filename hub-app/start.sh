#!/usr/bin/env bash

npx webpack --config hub-app/webpack.config.js --mode development;
echo '';
echo '------------------------------------------------------------';
echo '';
node ./hub-app/server;
