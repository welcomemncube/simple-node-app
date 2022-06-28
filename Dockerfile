#Start from a nodejs image
FROM node:latest

#Specify the directory
WORKDIR /app

#Copy package files and install dependencies
COPY package*.json ./
RUN npm install

#Copy all files
COPY . .
CMD ["npm", "start"]

