---
title: Essential Docker Commands
published: 2024-11-01
description: 'Most essential docker commands that helps every DevOps Guy.'
image: 'image.svg'
tags: [docker]
category: 'Docker'
draft: false 
lang: ''
---

# Most essential docker commands that helps every DevOps people.

Docker makes it easy to package and run applications in any environment by using containers. Knowing a few essential Docker commands can help you create, manage, and troubleshoot these containers effortlessly. In this guide, we’ll cover the must-know commands to get you started with Docker quickly and efficiently. Let’s dive in!


1. `docker build -t my-app .` - Build a docker image
2. `docker run -dit -p 80:80 my-app` - Run a container in detached mode in port 80
3. `docker ps` - List all the running containers
4. `docker logs my-app` - View logs of a specific container
5. `docker exec -it my-app /bin/bash` - Access container shell
6. `docker push my-app:latest` - Upload image to docker registry
7. `docker pull my-app:latest` - Download image from docker registry
8. `docker system prune` - Delete unused containers, images, and volumes
9. `docker volume create my-volume` - Create a persistent volume on host
10. `docker volume ls` - List all persistent volumes
11. `docker network create my-network` - Create a custom network on host
12. `docker volume ls` - List all the networks created and configured
13. `docker network connect my-network my-app` - Connects the container to the custom network
14. `docker-compose up -d` - Run the compose file that contains multi-container configurations
15. `docker-compose down` - Stop the compose file that contains multi-container configurations
16. `docker inspect my-app` - View the container details
17. `docker image history my-app` - View the docker image build history
18. `docker stats` - Monitor container resource utilization on host level
19. `docker diff my-app` - See changes made in a container
20. `docker cp my-app:/file/path/within/container /host/path/target` - Copy files from container to host machine
21. `docker update --restart=always my-app` - Update container to auto-restart on whenever it stops
22. `docker tag my-app:v1 my-app:v2` - Rename the docker image and it's version
23. `docker login my-registry.azurecr.io` - Manually authenticate the Azure container registry
24. `docker run --rm -it my-app /bin/bash` - Run a container and remove it on exit
25. `docker run --name my-db -e POSTGRES_PASSWORD=mysecretpassword -d postgres` - Run a container with environment variables

<br>

:::note[Conclusion]
This is it! You've learnt the basic essential docker commands. If you have any doubts/issues/errors with the above contents, feel free to contact me. Cheers, Happy learning.
:::