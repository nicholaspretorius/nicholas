FROM node:13.6.0-alpine

# set working dir
WORKDIR /var/www/html/client

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /var/www/html/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /var/www/html/client/package.json
COPY package-lock.json /var/www/html/client/package-lock.json
RUN npm ci
# RUN npm install react-scripts@3.3.0 -g --silent

# start app
CMD ["npm", "start"]