FROM node:16-alpine3.11
RUN apk update && \
  apk add bash vim

RUN mkdir /app
RUN mkdir /app/frontend

WORKDIR /app/frontend
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . /app/frontend

EXPOSE 3000

CMD ["yarn", "run", "start"]