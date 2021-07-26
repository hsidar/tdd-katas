FROM node:14

# Docker image dir whereabouts things happen
WORKDIR /usr/src/app

# copy app dependencies
COPY package*.json ./

# install app dependencies
RUN npm install

# Copy over entirety of source code
COPY . .

# Thing to do on container start
CMD [ "npm", "test" ]

