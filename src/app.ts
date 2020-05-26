import express from 'express'
import { createConnection } from 'typeorm'

import 'reflect-metadata'

import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
  }

  private database(): void {
    createConnection()
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
