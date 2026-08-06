# Use Node.js LTS image
FROM node:20-alpine

# Create application directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose backend port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]