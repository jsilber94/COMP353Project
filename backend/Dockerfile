FROM node as prod

WORKDIR /app

COPY package*.json ./

run npm install

COPY . .

ENV NODE_ENV=production

CMD ["nodemon", "app.js"]