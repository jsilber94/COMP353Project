#!/bin/bash

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

docker build . -t test1

docker run --name test1 -d -p 9891:9891 test1