#!/usr/bin/bash
source ./store_env/bin/activate
cd ./store_env/backend
flask run
cd ../src
npm i
npm start

