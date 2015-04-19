# Docker, Node, Nginx

An example of how to use `docker-compose` to easily setup the
building and linking of a container running nginx as a proxy server and
a web app written in [node](https://nodejs.org/)
with [express](http://expressjs.com/).

## Usage

Given that you already have [Docker](http://docs.docker.com/installation/) and
[Docker Compose](https://docs.docker.com/compose/) installed, and have cloned
this repo, simply run `docker-compose up` in the command-line from root.

*Example*:

```
~/path/to/repo:$ docker-compose up
```

In your browser, visit `http://DOCKER_HOST_IP/` and you should see the app
running; displaying a JSON object with information about the request.