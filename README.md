# Personal Website

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
