# NGINX Tutorial
The branch involves the workouts related to learning nginx.

## Tutorial 1
### Waypoints
- [ ] Getting started with Docker and Nginx
    - [ ] Pull image from Docker
    - [ ] Run Nginx container
    - [ ] Docker stop container
    - [ ] Verifying your installation
        - [ ] Nginx -v
        - [ ] Docker top web
        - [ ] curl localhost
        - [ ] Browser localhost:8080
    - [ ] Basic Service management
        - [ ] service nginx start
        - [ ] service nginx stop
        - [ ] Nginx commands
            - [ ] -h
            - [ ] -v -V
            - [ ] -t -T
            - [ ] -s signal
    - [ ] Nginx default folder /usr/share/nginx/html
    - [ ] Docker-compose file - using volumes
    - [ ] Serving custom pages - index.html
    - [ ] Building a new Nginx image
        - [ ] DockerFile

### Notes
 - The first way is to use docker-compose.yml to modify the currently pulled image using Dockerfile and serve static web content on the available server 
 - The second way is to use Dockerfile for copying the custom content to serving path on the basic pulled image