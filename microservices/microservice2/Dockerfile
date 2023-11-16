FROM node:alpine

WORKDIR /microservice2
COPY package.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]