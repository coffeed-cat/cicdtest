#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/cicdtest
cd $REPOSITORY

pm2 kill

git pull

pm2 start index.js
