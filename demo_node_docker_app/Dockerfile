FROM node:0.12.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY Makefile /usr/src/app/

RUN make clean
RUN make build

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]