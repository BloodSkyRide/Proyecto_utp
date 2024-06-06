FROM node:20-alpine3.16

WORKDIR /app

COPY . .

RUN npm install
RUN npm install express
RUN npm install sequelize
RUN npm install mysql2
RUN npm install cors

EXPOSE 8001

CMD ["node", "app.js"]