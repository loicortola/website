# Personal Website

[![Build Status](https://travis-ci.org/loicortola/website.svg?branch=master)](https://travis-ci.org/loicortola/website)

This website is using Webpack, React 16, React-Router 4, Redux, SASS & CSS Modules

It is built using travis-ci and deployed via Ansible on the main server [www.loicortola.com](https://www.loicortola.com)

## 1. Development Environment

To develop, either use 


### Regular dev environment
 * Install npm
 * Run ```npm install```
 * Run ```npm start```

### Docker-based dev environment
 * Install docker
 * Run scripts

```shell
# Create your development image
./dev/bin/build.sh
# Clean previous containers using the same name
./dev/bin/clean.sh
# Start your webpack dev server
./dev/bin/serve.sh
```
