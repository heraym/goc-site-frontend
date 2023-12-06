FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
#COPY .env ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
ENV PORT 3000
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]
