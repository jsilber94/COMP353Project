#!/bin/bash

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

docker build . -t backend

docker run --name backend -d -p 9891:9891 backend

heroku container:push web --app db-backend353

heroku container:release web --app db-backend353