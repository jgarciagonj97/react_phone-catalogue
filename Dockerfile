FROM node:12.18.2-alpine
WORKDIR '/app'
EXPOSE 3000
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]