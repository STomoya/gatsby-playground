FROM node:13-alpine

RUN apk add --no-cache python make g++ && \
    apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
    rm -fR /var/cache/apk/*

WORKDIR /usr/src

COPY ./package.json package.json

RUN npm install

EXPOSE 8000