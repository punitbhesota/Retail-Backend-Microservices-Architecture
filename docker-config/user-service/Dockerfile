FROM --platform=linux/amd64 node:18-alpine

# Working directory for application
WORKDIR /services/user-service

# Copy your application code
COPY package*.json ./
RUN npm install

# Copy the rest of application files
COPY . .

# Start command for Node.js server
CMD [ "npm", "run", "dev" ]

EXPOSE 8083