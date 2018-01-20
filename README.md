## Nuxt.js with Express Hot

This is Nuxt.js with Express template using hot reloading for nuxt rather than the live reload of backpack.
To make this possible in development mode a http proxy pointing to the the api server is added to nuxt as a server middleware.
During development nuxt and the api server has to be run as separate servers.

# Nuxt.js with Express

> [ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nekdolan/express-template-hot <project-name>
cd <project-name> # move to your project
npm install # or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

## Commands

| Command | Description |
|---------|-------------|
| npm run nuxt | Runs nuxt in development mode on port 3000 |
| npm run dev | Runs the express api server on port 8008 |

Everything else should work the same way as nuxt-express

## ExpressJS Changes

- There is a  `server` directory with the root of your `express` server.
- The `routes` directory is called `server/api`.

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).


## Examples

- [Handling Protected SSR Routes](https://github.com/nuxt/express/blob/master/protected-ssr-api.md)

## Documentation

- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [ExpressJS license](https://github.com/expressjs/express/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
