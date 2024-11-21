FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files and package.json first to install dependencies
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the correct port (adjust if needed)
EXPOSE 5000

# Define the entry point for the container
CMD ["npm", "start"]
