FROM node:18-alpine3.17

RUN apk add git && apk add bash \
    && apk add nano

RUN mkdir /app

WORKDIR /app

ADD . ./

RUN npm install --production

CMD ["node", "server.js"]