import express from 'express'

export default (app: express.Application): express.Application => {
  // Routes
  app.get('/', (_, res: express.Response) =>
    res.send('Express + TypeScript Server'),
  )

  return app
}
