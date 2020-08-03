FROM node

WORKDIR /app

COPY package*.json ./

run npm install

COPY . .

CMD ["node", "app.js"]