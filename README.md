[![Build Status](https://travis-ci.org/darkmavis1980/react-jest-boilerplate.svg?branch=master)](https://travis-ci.org/darkmavis1980/react-jest-boilerplate)

# Simple boilerplate with React, Webpack, Jest and Sass support

This is a very basic boilerplate with support for:

* React 18
* React Router
* Jest & React Test Renderer (unit tests)
* Webpack 5 (module bundler)
* Babel 7+
* ESLint with Airbnb standards

## Install it

Just run `npm install` to install the dependencies.

## Run it

For active development you should run it with the following commands:

```bash
# Run it with watcher, so the process stays alive and it rerenders the page every time you apply a change to the code
npm run dev

# Run it once and generate the code in the dist folder
npm run start
```

## Run the unit tests

This repository comes with Jest unit testing library with Enzyme, for React support, it also includes coverage report with Instanbul that can be found in the `coverage` folder.

```bash
# You can run Jest with a watcher, so it updates when the code changes
npm run test:watch

# Run it once
npm run test 
# or 
npm test

# Run the coverage
npm run coverage
```

## Create the build

Running the following command:

```bash
npm build
```

It will generate the `dist` folder with the minified code and vendor packages.

## Configuration

In case you need to store an endpoint for your APIs, you can either copy and rename the `config/config.sample.js` file into `config/config.js` and then import that in the React. Otherwise you can use the environmental variable `API_PATH` and read it with `process.env.API_PATH` and then use that instead (this variable is passed by Webpack when it builds the code). To do so you might want to change your npm scripts to include that at least for local development, so for example:

```javascript
//package.json
"scripts": {
    "start": "NODE_ENV=development API_PATH=http://localhost:8080 ./node_modules/webpack/bin/webpack.js --mode development",
    "build": "NODE_ENV=production API_PATH=https://prod.someserver.com ./node_modules/webpack/bin/webpack.js --mode production",
    ...
}

```

You can also pass additional env variables, but you need to add them into the webpack plugin that shares the env variables, for example:

```javascript
//webpack.config.js
{
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.API_PATH': JSON.stringify(process.env.API_PATH),
      'process.env.CUSTOM_VAR': JSON.stringify(process.env.CUSTOM_VAR)
    })
  ]
}
```

---

## Docker

Build the container first:

```bash
docker build -t react-boilerplate .
```

Run the container:

```bash
docker run --name react --rm -d -p 8080:80 react-boilerplate
```

Run the container and mount a volume:

```bash
docker run -v /host/directory:/container/directory --name react --rm -d -p 8080:80 react-boilerplate
```

> Note: the `--rm` flag automatically removes the container when it exits, so you just need to stop it and not to remove it manually, more info [here](https://docs.docker.com/engine/reference/run/#clean-up---rm)

Use the bash shell of the container:

```bash
docker exec -t -i react /bin/bash
```

Stop the container:

```bash
docker stop react
```

### Good to know

Get the list of the containers:

```bash
# Get the list of the containers for the current project
docker ps

# Get the list of all containers
docker ps -a

# Get only the last container created
docker ps -al
```

Remove the container for the project:

```bash
# show all the container to find the <CONTAINER ID>
docker ps -a
# use the container id <CONTAINER ID> for the pricing-ui to remove it from the active containers
docker rm <CONTAINER ID>
```

---

## React router on a webserver

While working on development environment the fallback for the react router is taken care by the `webpack-dev-server`, this means that when you refresh a page, it knows that it has to reopen the `index.html` page and tell React to route to a specific component.
Unfortunately this doesn't work well with Nginx or Apache, or at least it doesn't work until you get out of the react routing domain, like refreshing a page or doing a directly link like with an anchor (`<a>`) tag.
For example if you have a route called `/my-data`, this is an internal route for React, but the web server doesn't know that, and if you refresh, it will try to look for a rewrite rule and subsequentally check if it's a folder on the server, and after all it will return a 404 error because nothing can be resolved.
To make it work you need to tell to the web servers that when it tries to serve a route that the server itself is not managing, to fallback to the main html page.

> The same logic can be applied if you use S3 as web hosting.

Here a couple of very generic formulas for the usual web servers:

### Nginx

```
server {
  listen 80 default_server;
  server_name /var/www/example.com;

  root /var/www/example.com;
  index index.html index.htm;

  location ~* \.(?:manifest|appcache|html?|xml|json)$ {
    expires -1;
    # access_log logs/static.log; # I don't usually include a static log
  }

  location ~* \.(?:css|js)$ {
    try_files $uri =404;
    expires 1y;
    access_log off;
    add_header Cache-Control "public";
  }

  # Any route containing a file extension (e.g. /devicesfile.js)
  location ~ ^.+\..+$ {
    try_files $uri =404;
  }

  # Any route that doesn't have a file extension (e.g. /devices)
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### Apache 2

```
<VirtualHost *:8080>
  ServerName example.com
  DocumentRoot /var/www/httpd/example.com

  <Directory "/var/www/httpd/example.com">
    ...

    RewriteEngine on
    # Don't rewrite files or directories
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    # Rewrite everything else to index.html to allow html5 state links
    RewriteRule ^ index.html [L]
  </Directory>
</VirtualHost>
```

## Changelog

The changelog is maintained with this library: [git-chglog](https://github.com/git-chglog/git-chglog)