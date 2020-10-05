import expressLoader from './express'
import express from 'express'

export default function (app: express.Application): express.Application {
  expressLoader(app)

  return app
}
