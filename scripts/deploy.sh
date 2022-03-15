#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/cicdtest
cd $REPOSITORY

pm2 kill

pm2 start index.js
