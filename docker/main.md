# 🐳 Docker compose

### 💬 Dockerfile

```Dockerfile
FROM node:12

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

CMD ["npm","start"]
```

### 🍣 package.json

```json
"scripts":{
    "start":"npx nodemon web.js"
}
```

### 🎋 docker-compose.yml

```yml
version: '3'
services:
  mailer-service:
    build: './mailer'
    volumes:
      - './mailer:/home/node/app'
    ports:
      - '8000:80'
  web-service:
    build: './web'
    volumes:
      - './web:/home/node/app'
    ports:
      - '8001:80'
    depends_on:
      - 'mailer-service'
```

### 📋 commands

```npm
docker-compose up --build
docker-compose up -d
docker ps
docker stop ef6150379abe
```
