FROM --platform=linux/amd64 node:18-alpine
# FROM node:17.8.0-bullseye-slim

# Copy your application code
COPY package*.json ./
RUN npm install

#########################################################################
# SERVICE SETUP
#########################################################################
WORKDIR /services/migration-service
COPY /services/migration-service/db-migrations ./migrations
# Start the service
CMD ["npm", "run", "dev"]

EXPOSE 8081
