FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm -g add nodemon
RUN npm run seed
EXPOSE 1001
CMD ["npm","start"]
RUN npm run seed