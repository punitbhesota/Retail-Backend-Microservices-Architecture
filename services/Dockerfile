FROM --platform=linux/amd64 node:18-alpine
# FROM node:17.8.0-bullseye-slim

#########################################################################
# BOOTSTRAP
#########################################################################
COPY . .
RUN npm i

#########################################################################
# SERVICE SETUP
#########################################################################
WORKDIR /services/api-service
COPY db-migrations ./migrations
# Start the service
CMD ["npm", "run", "docker"]

EXPOSE 8080
