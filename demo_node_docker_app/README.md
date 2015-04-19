# Docker & Node.js

A simple node.js app that exposes one endpoint `/` providing a JSON response
with information about the request.

This app uses docker to create a container that is linked to a nginx container
for proxying requests to the server.