FROM node:12 AS front-end-build
WORKDIR /react-app
COPY client/ .

RUN npm install
RUN npm run build
FROM node:12
WORKDIR /public
COPY . .
COPY --from=front-end-build /react-app/build/ ./client/build/
RUN npm install
RUN npm install -g sequelize-cli
EXPOSE 5000
CMD ["npm", "start"]