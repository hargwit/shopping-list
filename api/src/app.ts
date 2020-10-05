import express from 'express'
import pipe from './utils/pipe'

import loaders from './loaders'
import { Server } from 'http'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config.json')

function startServer() {
  const app = express()

  const listen = (app: express.Application): Server =>
    app.listen(config.port, () => {
      console.log(`
        ################################################
           Server listening on port: ${config.port}   
        ################################################
      `)
    })

  pipe(loaders, listen)(app)
}

startServer()
