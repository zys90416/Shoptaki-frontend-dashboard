FROM node:14-stretch

RUN mkdir -p /src

COPY ./ /src/

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD npm run start
