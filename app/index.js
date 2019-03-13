import * as http from 'http'
import debug from 'debug'
import App from './app'
import './config/config'
import './db/mongoose'

const logger = debug('creditro-node-api:startup')
const app = new App()
const DEFAULT_PORT = 3000
const port = normalizePort(process.env.PORT)
const server = http.createServer(app.express)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val) {
  let port = (typeof val === 'string') ? parseInt(val, 10) : val

  if (port && isNaN(port)) return port
  else if (port >= 0) return port
  else return DEFAULT_PORT
}

function onError(error) {
  if (error.syscall !== 'listen') throw error

  let bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port.toString()}`

  switch (error.code) {
  case 'EACCES':
    console.error(`${bind} requires elevated privileges`)
    process.exit(1)
    break
  case 'EADDRINUSE':
    console.error(`${bind} is already in use`)
    process.exit(1)
    break
  default:
    throw error
  }
}

function onListening() {
  let addr = server.address()
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
  logger(`Listening on ${bind}`)
}
