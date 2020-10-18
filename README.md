<p align="left">
   <img src=".github/logo.png" width="200"/>
</p>

# Happy API

> Take happiness to the world, visit orphanages and change the day of many children

> [Click here to see the database model](https://app.quickdatabasediagrams.com/#/d/pDfles)

> [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Hotseat%20API&uri=https%3A%2F%2Fgithub.com%2FLauraBeatris%2Fhotseat-api%2Fblob%2Fmaster%2F.github%2Fhotseat.json)

[![Author](https://img.shields.io/badge/author-Tivorn-1D71AB?style=flat-square)](https://github.com/tivorn)
[![Languages](https://img.shields.io/github/languages/count/tivorn/happy-api?color=%231D71AB&style=flat-square)](#)

# 🛠️ Features

- 🏘️ List orphanages by localization
- 🏠 View orphanage details
- 🤲 Create orphanage

# 🏗️ Instalation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```
git clone https://github.com/LauraBeatris/hotseat-api.git

```

SSH URLs provide access to a Git repository via SSH, a secure
protocol. If you use a SSH key registered in your Github account, clone
the project using this command:

```
git clone git@github.com:LauraBeatris/hotseat-api.git

```

**Install dependencies**

```
yarn install

```

Or

```
npm install

```

# 🏃🏻‍♀️Getting Started

Run the following command in order to configure the database schema

`yarn typeorm migration:run`

Run the following command in order to start the application in a development environment:

`yarn dev`