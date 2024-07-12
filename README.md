# Howdy! [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/license/mit/) [![node][node]][node-url]

> a website about nothing...

## Building and Deploying Locally

Building and running in your local dev environment is very easy. Be sure you have [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/), and [npm](http://npmjs.com/) installed, then follow the directions below.

### Clone the source code

```bash
git clone https://github.com/oconnellj2/oconnellj2.github.io.git
```

### (Optional) Install the correct node version using [nvm](https://github.com/nvm-sh/nvm)

```bash
nvm install
```

#### Usage

```bash
  nvm install 8.0.0                     Install a specific version number
  nvm use 14.0                          Use the latest available 14.0.x release
  nvm run 12.10.3 app.js                Run app.js using node 12.10.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

  nvm install node                      Install the latest available version
  nvm use node                          Use the latest version
  nvm install --lts                     Install the latest LTS version
  nvm use --lts                         Use the latest LTS version
```

### Install development dependencies

```bash
npm install
```

### Run a local development server

```bash
npm start
```

### The web app is now running at

```bash
http://localhost:3000
```

## Contributing

[James O'Connell](https://github.com/oconnellj2) -> [email me](mailto:jdo.info@pm.me)
