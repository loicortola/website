#!/bin/bash
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD";
docker push loicortola/website:$TRAVIS_BUILD_NUMBER
docker push loicortola/website:latest