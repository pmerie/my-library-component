# Build the React app
FROM node:20-alpine AS build

# Sets the working directory inside the container
WORKDIR /santiago_princessmerie_ui_garden

# Copy package.json and package-lock.json to leverage caching
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the production version
RUN npm run build

# Stage 2: Serve production build with Nginx
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build /santiago_princessmerie_ui_garden/build /usr/share/nginx/html

# Expose port 8083 
EXPOSE 8083

# Start Nginx
RUN sed -i 's/listen       80;/listen       8083;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]