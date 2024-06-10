# Use Node.js image as the base image for building React app
FROM node:20 as builder

# Metadata
LABEL name="Astro App - Blog Site Deployment"
LABEL author="Tamilvanan Gowran"
LABEL email="hello@tamilvanan.live"
LABEL website="https://gtamilvanan17.github.io/cdops-blogs/"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Use Nginx as the base image for serving the built React app
FROM nginx:alpine

# Copy built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]