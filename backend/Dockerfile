FROM node:12.22-alpine
RUN apk update && \
  apk add bash vim

RUN mkdir /app

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g forever

RUN RUN chmod +x /app/backend/bin/forever/*.sh

COPY . /app

EXPOSE 3000

CMD ["forever", "start" ,"index.js"]