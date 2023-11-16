FROM node:alpine

WORKDIR /microservice1
COPY package.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]