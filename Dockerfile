FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

COPY .env* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]