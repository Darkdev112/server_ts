FROM nginx:latest
COPY ./src/static/index.html /usr/share/nginx/html/index.html