import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import authenticate from './middleware/authentication' // middleware for doing authentication

import IndexRouter from './routers/IndexRouter'

export default class App {
  // create the express instance, attach app-level middleware, attach routers
  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
  }

  // register middlewares
  middleware() {
    // authenticate each request
    // will set `request.user`
    this.express.use(authenticate)

    this.express.use(morgan('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended: false}))

    // Allow cross origin requests
    this.express.all('*', function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Headers', 'Origin, Accepts, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-CSRF-Token, Authorization')
      res.setHeader('Access-Control-Allow-Methods', '*')
      res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time')
      res.setHeader('Access-Control-Max-Age', '1000')
      next()
    })
  }

  // connect resource routers
  routes() {
    const indexRouter = new IndexRouter('/')

    // attach it to our express app
    this.express.use(indexRouter.path, indexRouter.router)
  }
}
