FROM node as prod

WORKDIR /app

COPY package*.json ./

RUN apt-get bash

run npm install

COPY . .

ENV NODE_ENV=production

RUN "ssh -L 3306:dyc353.encs.concordia.ca:3306 login.encs.concordia.ca -u a_corico" 

CMD ["nodemon", "app.js"]