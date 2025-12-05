# Use official nginx to serve static files
FROM nginx:stable-alpine

# Remove default html and copy project files into nginx html folder
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use default nginx entrypoint/cmd
