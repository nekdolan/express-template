import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const dev = !(process.env.NODE_ENV === 'production')
const port = process.env.PORT || (dev ? 8008 : 3000)

// Import API Routes
app.use('/api', api)

if (!dev) {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = dev

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Give nuxt middleware to express
  app.use(nuxt.render)
}

app.set('port', port)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
