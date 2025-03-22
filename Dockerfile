# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use a lightweight server dedicated for static content
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist

# Install serve
RUN npm install -g serve

# The port that Cloud Run will use
ENV PORT=8080

# Start the server and explicitly listen on PORT
CMD serve -s dist -l ${PORT}
