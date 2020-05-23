import express from 'express'
import cors from 'cors'
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
    this.express.use(cors())
  }

  private database(): void {
    createConnection()
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
