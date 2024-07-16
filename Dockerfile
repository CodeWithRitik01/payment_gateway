FROM node:20

# Create app directory
WORKDIR /usr/index

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

CMD [ "node", "index.js" ]
